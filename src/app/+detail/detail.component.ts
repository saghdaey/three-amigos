import {
  Component,
  OnInit,
} from '@angular/core';
import { TeamService } from '../services';
import { User } from '../models/UserList';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'detail',
  templateUrl: 'detail.list.html'
})
export class DetailComponent implements OnInit {
  public userList: User[];
  constructor(private teamService: TeamService) {}
  public ngOnInit() {
      this.teamService.getUsers().subscribe( (result) => {
        this.userList = result;
      });
  }

}
