import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
  isLoggedIn = false;
  displayHeader = false;
  constructor(private router: Router, private auth: AuthService, private http : HttpClient) {
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        console.log("changed")
        this.isLoggedIn = JSON.parse(this.auth.isLoggedIn());
        console.log('Condition : ',JSON.parse(this.auth.getUserRole()) == 2);
        
        if(JSON.parse(this.auth.getUserRole()) == 2) this.displayHeader = true;
      }
      
    });
  }
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
    this.http.get(this.auth.getDomainName() + '/api/user/logout').subscribe((res:any) => {
      if(res.success){
        this.auth.setLoggedIn(false);
        this.displayHeader = false;
        this.isLoggedIn = false;
        this.router.navigate(['/signIn']);
        localStorage.clear();
      }else{
        alert(res.error);
      }
    },err =>{

    })
   
  }
  // toggleIsLoggedIn() {
  //   this.isLoggedIn = !this.isLoggedIn;
  // }
  ngOnInit() {
    console.log(this.isLoggedIn);
  }
}

