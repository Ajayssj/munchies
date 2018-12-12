import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {  Observable } from 'rxjs/Observable';
import { element } from 'protractor';
import { from } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobNavbarOpen:Boolean=false;
  isLoggedIn:Observable<boolean> = JSON.parse(this.auth.isLoggedIn());
  constructor(private router: Router, private auth: AuthService) {}
  openSideMenu(event) {
    var openBtn = document.getElementById("open");
    console.log("hiiiiiiii");
    var overlay = document.getElementById("overlay");
    overlay.classList.toggle("showOverlay");
    openBtn.classList.toggle("bars_cross");
    var sideBarMenu = document.getElementById("responsive_menu");
    sideBarMenu.classList.toggle("openSideMenu");
  }
  logout() {
    this.auth.setLoggedIn(false);
    this.router.navigate(['/signIn']);
  }
  // toggleIsLoggedIn() {
  //   this.isLoggedIn = !this.isLoggedIn;
  // }
  ngOnInit() {
    console.log(this.isLoggedIn);
  }
}

