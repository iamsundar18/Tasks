import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
// import * as schema from './schema.json';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {


  private hasBaseDropZoneOver: boolean = false;
  public uploader: any;
  private title: any;

  constructor(private ud: UserService, private back: Router, private location: Location,
    private cloud: Cloudinary, private zone: NgZone) {
    this.title = 'BIRD';
  }


  gend = ["Male", "Female", "Custom"];
  loc: any = this.ud.pass;
  detail: any;
  ngOnInit(): void {

    const uploaderOptions: FileUploaderOptions = {
      url: `https://api.cloudinary.com/v1_1/dm7lrw0hf/image/upload`,

      autoUpload: true,
      isHTML5: true,
      removeAfterUpload: true,
      headers: [
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]
    };

    this.uploader = new FileUploader(uploaderOptions);

    this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
      form.append('upload_preset', 'gwkgorip');

      form.append('file', fileItem);

      // Use default "withCredentials" value for CORS requests
      fileItem.withCredentials = false;
      return { fileItem, form };
    };

  }
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  fakedData: any = [];
  upload: any = [];
  schema: any = [];
  dataSchema: any = [];
  cardHeader: any;
  cardFields: any = [];
  datalistView: any = [];

  openFakeDate() {
    this.ud.getpost().subscribe(data => {
      this.fakedData = data;
    })
  }

  onFile(receive: any) {
    this.upload = receive.target.files;
    console.log(this.upload);
  }

  onUpload() {
    this.ud.filePost(this.uploader).subscribe(data => {
      console.log(this.upload);
    })

  }

  goBack() {
    this.back.navigateByUrl('Login-page');
  }

  editInfo() {
    this.detail = this.loc;
  }
  updInfo() {
    this.location.back();
    alert("Successfully Updated...");
    console.log(this.ud.users);
  }
  getBankDetailTableView() {
    this.getSchema();
    this.getArraydata();
  }
  getSchema() {
    this.ud.getpost().subscribe(data => {
      this.schema = data.columns;
      this.cardHeader = data.cardView.header;
      this.cardFields = data.cardView.fields;
      this.datalistView = data.listView.lines[0].fields;
      console.log(data);
    });
  }
  getArraydata() {
    this.ud.getData().subscribe(datas => {
      this.dataSchema = datas;
      console.log(this.dataSchema);
    })
  }
}
