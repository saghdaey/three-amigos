import { Component, OnInit } from '@angular/core';
import { Globals } from './../globals';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.less' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(private router:Router, private globals: Globals) {}

  public ngOnInit() {
    let user=this.globals.getUser();
    if(!user){
      this.router.navigate([""]);
    }
  }


}
