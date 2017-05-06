import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject} from "rxjs";


@Injectable()
export class Globals {
    private loggedInUser;
    private userId:number;
    private userType:String;
    private _loggedinSource = new BehaviorSubject<any>(null);
    loggedin$ = this._loggedinSource.asObservable();


    constructor() {
    }

    setUser(val) {
        this.loggedInUser = val;
        this._loggedinSource.next(true);
        if(val){
            this.userId=val.id;
        }
    }

    getUser() {
        return this.loggedInUser;
    }

    getUserId(){
        return this.userId;
    }
    setUserId(val){
      this.userId=val;
    }


}
