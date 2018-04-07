import {Component, OnInit} from '@angular/core';

import {User} from '../../models';
import {UserService} from '../../services';
import {Router} from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isNavbarCollapsed = true;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }

  currentUser: User;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
  }


  // Handle the logout from the nav menu
  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }


}
