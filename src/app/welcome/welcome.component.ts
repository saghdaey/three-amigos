import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'welcome',
  styleUrls:['./welcome.component.less'],
  template: require('./welcome.component.html')
})
export class WelcomeComponent {
  constructor(private router:Router){

  }
  goToLogin(){
    this.router.navigate(['./login'])
  }
}




