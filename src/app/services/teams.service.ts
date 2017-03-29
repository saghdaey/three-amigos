
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class TeamService {
    private teamUrl: string;
    private teamData = require('team.json');
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
}
