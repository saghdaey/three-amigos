/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import { Globals } from './globals';
import { ActivatedRoute } from '@angular/router'; 

var test_user=require('app/user/test_user.json');


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './app.component.less' ],
  template: require('./app.component.html')
})
export class AppComponent implements OnInit {
  constructor(private globals: Globals, private route: ActivatedRoute) {
  }

  public ngOnInit() {
  }
  get user(){
    return this.globals.getUser();
  }
}
