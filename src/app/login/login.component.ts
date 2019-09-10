import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from '../service/authentication.service';
import { Login } from '../model/login';
import { GenericResponse } from '../util/generic-response';
import { first } from 'rxjs/operators';
import { User } from '../model/user';
import { CustomValidator } from '../service/custom-validator';
import { NGXLogger } from 'ngx-logger';
import { SnackbarService } from '../service/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDetail: Login;
  loginForm: FormGroup;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute, private router: Router,
    private authService: AuthenticationService,
    private snackbarService: SnackbarService) {

  }

  ngOnInit() {

    // this.logger.info("Hello this is sprint 4 demo ..");

    this.route.queryParamMap.subscribe(params => {
      // this.returnUrl = params.params.returnUrl;
    });

    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, CustomValidator.validatePassword])
    });

    this.authService.logOut();

    // this.logger.debug('this is debug log')
    // this.logger.info('this is info log')
    // this.logger.warn('this is warning log')
    // this.logger.error('this is error log')
  }

  onSubmit() {

    const login: Login = this.loginForm.value as Login;

    this.authService.getUserByUserNamePassword(login).pipe(first()).subscribe(
      (response: User) => {
        console.log('tbis is login response :', response)
        // this.snackbarService.openSnackBar(response.response[0], "error");
        this.authService.currentUserSubject.next(response);
        localStorage.setItem('currentUser', JSON.stringify(this.authService.currentUserSubject.value));
        if (this.authService.currentUserSubject.value.role === 'admin') {
          this.router.navigate(['manage']);
        } else {
          if (this.returnUrl) {
            this.router.navigate([this.returnUrl])
          } else {
            this.router.navigate(['cart']);
          }
        }

      }, error => {
        // this.logger.error(error);
      });
  }

  get formControls() { return this.loginForm.controls; }

}
