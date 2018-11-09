import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  openSideMenu(event) {
    var openBtn = document.getElementById("open");
    console.log("hiiiiiiii");
    var overlay = document.getElementById("overlay");
    overlay.classList.toggle("showOverlay");
    openBtn.classList.toggle("bars_cross");
    var sideBarMenu = document.getElementById("responsive_menu");
    sideBarMenu.classList.toggle("openSideMenu");
  }
}

