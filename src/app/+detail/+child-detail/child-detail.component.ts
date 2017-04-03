import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../../services';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'child-detail',
  template: `<div *ngIf="user">
    <h1>Name: {{user.name | uppercase }}</h1>
    <h3>Created on: {{user.createdAt | date }}</h3>
    <h3>Age: {{user.age}}</h3>
    </div>
  `,
})
export class ChildDetailComponent implements OnInit {
  public user;
  constructor(private activatedRoute: ActivatedRoute, private teamService: TeamService) {}
  public ngOnInit() {
    console.log('hello `ChildDetail` component');
    this.activatedRoute.params.subscribe( (params) => {
      this.teamService.getUserDetail(params.id).subscribe(
          (result) => { this.user = result; }
      );
    });
  }

}
