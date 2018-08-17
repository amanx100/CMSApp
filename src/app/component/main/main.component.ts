import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

    showUser = false;
    showMessag = false;
    showNotification = false;
    constructor(private router: Router) { }
    close_all() {
        this.showNotification = false;
        this.showUser = false;
        this.showMessag = false;
    }
    User() {
        this.showNotification = false;
        this.showUser = !this.showUser;
        this.showMessag = false;
    }
    Messag() {
        this.showNotification = false;
        this.showUser = false;
        this.showMessag = !this.showMessag;
    }
    Notification() {
        this.showNotification = !this.showNotification;
        this.showUser = false;
        this.showMessag = false;
    }

    sidebar(drawer) {
        drawer.toggle();
    }
    logout() {
        sessionStorage.setItem('login', 'false');
        this.router.navigateByUrl('login');
    }

}
