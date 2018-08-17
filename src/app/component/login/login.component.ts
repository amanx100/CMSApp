import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CmsConfigService} from '../../service/cms-config.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {AllRequestService} from '../../service/all-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    hide = true;
    email = new FormControl('', [Validators.required, Validators.email]);
    defaultProfilePic = './assets/icon.svg';
    constructor(
        private router: Router, private http: HttpClient,
        private globals: CmsConfigService,
        public snackBar: MatSnackBar,
        private req: AllRequestService
    ) { }
    ngOnInit() {
    }
    login(UserName: String, pass: String) {
        this.req.getLoginAccess(UserName, pass).subscribe(
            res => {
                if (res['permission'] === 'yes') {
                    sessionStorage.setItem('login', 'true');
                    this.router.navigateByUrl('main/dashboard');
                } else {
                    this.snackBar.open(res['permission'], 'Close', {
                        duration: 2000,
                    });

                }
            }
        );
    }
    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }

}
