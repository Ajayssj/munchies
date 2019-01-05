import { Component } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { AuthService } from './user/auth.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadingRouteConfig: boolean;
  constructor (private http : HttpClient,  private router: Router, private authService : AuthService ) {
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
          this.loadingRouteConfig = true;
      } else if (event instanceof RouteConfigLoadEnd) {
          this.loadingRouteConfig = false;
      }
        // this._socketService.init();
      this.http.get(this.authService.getDomainName() + '/public/api/user/islogged').subscribe((res : any) =>{
        if(!res.success){
           this.authService.setLoggedIn(false);
           this.authService.setUserName('');
           this.authService.setUserRole(1);
          //  this.router.navigate(['/signIn'])
        }
          
      });
  });

  }


  ngAfterViewInit(){
  }
}
