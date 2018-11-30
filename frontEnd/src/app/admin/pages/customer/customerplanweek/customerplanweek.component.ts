import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../../user/auth.service';
import { ActivatedRoute } from '@angular/router';
interface weekRes {
  success: boolean,
  data: object,
  message: string
}

@Component({
  selector: 'app-custplanweek',
  templateUrl: './customerplanweek.component.html',
  styleUrls: ['./customerplanweek.component.css']
})
export class CustomerplanweekComponent implements OnInit {

  view: String = 'week';
  weeks = [];
  deleteMessage = '';
  data = {};
  constructor(private http: HttpClient, private auth: AuthService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.activeRoute.snapshot.params;
    console.log(routeParams);
    this.http.get(this.auth.getDomainName() + '/api/plan/customize/'+routeParams.planid+'/week/'+routeParams.weekid).subscribe((res: any) => {
      console.log(res.data);
      this.weeks = res.data;
    },
      err=> {
      console.log(err);
    });
  }

  editWeek(weekId) {
    console.log(weekId);
    
  }

  changeView(view) {
    this.view = view;
  }

}
