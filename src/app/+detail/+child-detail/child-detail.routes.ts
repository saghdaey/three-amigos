import { ChildDetailComponent } from './child-detail.component';

export const routes = [
  { path: ':id', component: ChildDetailComponent,  pathMatch: 'full' },
];
