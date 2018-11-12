import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Munchies';
  styles = {};
  constructor (private router: Router, private location: Location, private http: HttpClient) {
  }
  ngOnInit() {
    var browserHeight = window.innerHeight;
    var contentElementHeight = browserHeight - 200 + 'px';
    this.styles = {
      'min-height': contentElementHeight
    }
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
     
          var scrollToTop = window.setInterval(function () {
          var pos = window.pageYOffset;
          if (pos > 0) {
              window.scrollTo(0, pos - 20); // how far to scroll on each step
          } else {
              window.clearInterval(scrollToTop);
          }
      }, 16); // how fast to scroll (this equals roughly 60 fps)
  });
  }


  ngAfterViewInit(){
  }
}
