import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Title } from './title';
import { TeamService } from '../services';
import { TeamMember } from '../models';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.less' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  public team: TeamMember[];
  // TypeScript public modifiers
  constructor( private teamService: TeamService, public appState: AppState, public title: Title) {}

  public ngOnInit() {
    // this.teamService.getTeam().subscribe(data => { this.team = data });
    this.team = this.teamService.getStronglyTypedTeam();
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
