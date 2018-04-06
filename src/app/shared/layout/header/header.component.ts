import {Component, OnInit} from '@angular/core';

import {User} from '../../models';
import {UserService} from '../../services';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
