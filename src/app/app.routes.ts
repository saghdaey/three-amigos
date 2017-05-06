import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { WelcomeComponent} from './welcome';
import { LoginComponent } from './login'
import { MatchesComponent } from './matches'; 


import { DataResolver } from './app.resolver';
import { RegistrationComponent } from './registration';

export const ROUTES: Routes = [
  { path: '',      component: WelcomeComponent },
  { path: 'home',      component: HomeComponent },
  { path: 'register', component: RegistrationComponent} ,
  { path: 'login', component: LoginComponent} ,
  { path: 'matches', component: MatchesComponent },
  { path: '**',    component: NoContentComponent }
];
