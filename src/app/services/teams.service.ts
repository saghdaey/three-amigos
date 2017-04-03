
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../models/UserList';
import { Observable } from 'rxjs';
@Injectable()
export class TeamService {
    private teamUrl: string;
    private teamData = require('team.json');
    private userList: User[];
    constructor(private http: Http) {
// this.teamUrl = 'http://bytecubed.com/wp-content/plugins/our-team/index_files/teamMembers.json';
    }
    public getTeam() {
        return this.teamData;
        // return this.http.get(this.teamUrl).map(
        //     response => {
        //         return response.json();
        //     },
        //     error => {
        //         console.error('failed to return team data');
        //         return error;
        //     }
        // );
    }

    public getUsers() {
        if (!this.userList) {
            return this.http.get('http://589c770ee85b861200daac36.mockapi.io/bc/users').map(
                (response) => {
                    this.userList = response.json();
                    return response.json();
                },
                (error) => {
                    console.error('failed to return users: ' + error);
                }
            );
        } else {
            return Observable.of(this.userList);
        }
    }

    public getUserDetail(id: number) {
        return this.http.get('http://589c770ee85b861200daac36.mockapi.io/bc/users/' + id).map(
            (response) => { return response.json(); }
        );
    }
}
