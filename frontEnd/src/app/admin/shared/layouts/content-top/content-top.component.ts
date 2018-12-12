import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'content-top',
  templateUrl: './content-top.component.html',
  styleUrls: ['./content-top.component.scss']
})
export class ContentTopComponent {
  urlArr = this.router.url.split('/');
  routeTitle = this.urlArr[this.urlArr.length - 1];
  constructor(
    public _globalService: GlobalService,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.getRouteTitle();
  }

  private getRouteTitle() {
    /* this._globalService.isActived$.subscribe(isActived => {
      this.routeTitle = isActived.title;
    }, error => {
      console.log('Error: ' + error);
    }); */

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'isActived') {
        console.log(this.router.url)
        this.routeTitle = data.value.title || this.router.url;
        console.log(this.routeTitle)
      }
    }, error => {
      console.log('Error: ' + error);
    });
  }

  returnHome() {
    //    this._globalService._isActived({ title: 'Dashboard' });
    this._globalService.dataBusChanged('isActived', { title: 'Dashboard' });
  }
}
