import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css'],
  providers: [UserService, AuthenticationService]
})

export class ManageUserComponent implements OnInit {

  title: string = 'manage-user-component'
  userName;
  constructor(private authService: AuthenticationService, private userService: UserService) { }

  ngOnInit() {
    this.userName = this.userService.user.userName;
  }

  addOrUpdateUser() {

  }
}
