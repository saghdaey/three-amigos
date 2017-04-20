import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class RegistrationService {
    private registrationUrl: string;

    constructor(private http: Http) {
        // only one that will break is ben.stiefel@bytecubed.com
        // every other get will return 404
        this.registrationUrl = 'http://585d74d5d5faa51200c23ac9.mockapi.io/vel/checkUserName/';
    }

    public checkUserName(userName: string) {
        return this.http.get(this.registrationUrl + userName).map(
            (response) => {
                // user was found
                // console.log(response.json());
                if (response.json().length > 0) {
                    return response.json();
                }
            },
            (error) => {
                if (error.status === 404) {
                    // user not found, is good
                    return null;
                } else {
                    // error != 404 means user was found
                    return { checkUser: true };
                }
            }
        );
    }
}
