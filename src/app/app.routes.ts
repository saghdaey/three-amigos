import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { WelcomeComponent} from './welcome';

import { DataResolver } from './app.resolver';
import { RegistrationComponent } from './registration';

export const ROUTES: Routes = [
  { path: '',      component: WelcomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'register', component: RegistrationComponent} ,
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  // { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
