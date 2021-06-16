import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    users: any = [];

    pass: any = {};

    constructor(private http: HttpClient) { }

    getpost(): Observable<any> {
        let url = "https://jsonplaceholder.typicode.com/todos";
        return this.http.get(url);
    }

    filePost(data: any): Observable<any> {
        let url = "https://api.cloudinary.com/v1_1/${dm7lrw0hf}/upload";
        return this.http.post(url, data);
    }
    getImage(imageUrl: any): Observable<any> {

        return this.http.get(imageUrl, { responseType: 'blob' });
    }

}