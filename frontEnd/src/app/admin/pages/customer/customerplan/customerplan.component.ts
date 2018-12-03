import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../../user/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
interface planRes {
  success: boolean,
  data: object,
  message: string
}
@Component({
  selector: 'app-custplan',
  templateUrl: './customerplan.component.html',
  styleUrls: ['./customerplan.component.css']
})
export class CustomerplanComponent implements OnInit {

  view: String = 'plan';
  plans = [];
  deleteMessage = '';
  data = {};
  constructor(private http: HttpClient, private auth: AuthService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const routeParams = this.activeRoute.snapshot.params;
    console.log(routeParams);
    
    this.http.get(this.auth.getDomainName() + '/api/plan/customize/'+routeParams.planid).subscribe((res: any) => {
      console.log(res.data);
      this.plans = res.data;
    },
      err=> {
      console.log(err);
    });
  }

  editPlan(activePlanId, weekNo) {
    console.log(activePlanId, weekNo);
    const routeParams = this.activeRoute.snapshot.params;
    console.log(routeParams);
    this.router.navigateByUrl('/admin/pages/customer/cust/'+routeParams.custid+'/plan/'+activePlanId+'/week/'+weekNo);
  }

  changeView(view) {
    this.view = view;
  }

}
