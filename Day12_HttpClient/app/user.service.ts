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

}