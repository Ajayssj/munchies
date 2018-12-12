import { Component, HostListener, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'user-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
    
    @HostListener('window:resize', ['$event'])
    onResize(event){
        this.applyMinHeightToContentElement();
    }
  title = 'Munchies';
  styles = {};
  constructor (private router: Router, private location: Location, private http: HttpClient,
    private cdRef:ChangeDetectorRef) {
  }
  ngOnInit() {
    this.applyMinHeightToContentElement();
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

  applyMinHeightToContentElement() {
    var browserHeight = window.innerHeight;
    var contentElementHeight = browserHeight - 120 + 'px';
    this.styles = {
      'min-height': contentElementHeight
    }
    console.log(contentElementHeight);
  }

  ngAfterViewInit(){
  }
}
