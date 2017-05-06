import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';


@Injectable()
export class LoginService {
    private loginUrl: string;
    constructor(private http: Http, private router: Router) {
        this.loginUrl = "https://stormy-plateau-77052.herokuapp.com/user?email=':email'&password=':password'";
    }

    public login(email: string, password: string){
        return this.http.get(this.loginUrl.replace(':email',email).replace(':password',password)).map(response=>response.json());
    }
}
