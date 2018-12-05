
import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../user/auth.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
interface weekRes {
  success: boolean,
  data: object,
  message: string
}
@Component({
  selector: 'app-plan-management',
  templateUrl: './plan-management.component.html',
  styleUrls: ['./plan-management.component.css']
})
export class PlanManagementComponent implements OnInit {
  view: String = 'week';
  weeks = [];
  products = [];
  deleteMessage = '';
  data = {};
  constructor(private http: HttpClient, private auth: AuthService, private activeRoute: ActivatedRoute) { }
  selectedPlanId: any;
  allPlans: any;
  value: any = {};
  ngOnInit() {
    this.http.get(this.auth.getDomainName() + '/api/plan/core').subscribe((res: any)=> {
      console.log(res.data);
      this.allPlans = res.data;
    }, 
    err=> {
      console.log(err);
    });
    
    const routeParams = this.activeRoute.snapshot.params;
    console.log(routeParams);
    this.http.get(this.auth.getDomainName() + '/api/plan/customize/'+routeParams.planid+'/week/'+routeParams.weekid).subscribe((res: any) => {
      console.log("weekProds",res.data);
      if (res.data && res.data.length) {
        this.weeks = res.data[0].products;
      }
      
    },
      err=> {
      console.log(err);
    });

    this.http.get(this.auth.getDomainName() + '/api/product').subscribe((res: any) => {
      console.log(res.data);
      this.products = res.data;
    },
      err=> {
      console.log(err);
    });
  }
  showWeeks() {
    console.log(this.selectedPlanId);
  }
  deleteWeekProd(prodId) {
    console.log(prodId);
    const routeParams = this.activeRoute.snapshot.params;
    console.log(routeParams);
    this.http.delete(this.auth.getDomainName() + '/api/plan/active/'+routeParams.planid+'/product/'+prodId+'/week/'+routeParams.weekid,{}).subscribe((res: any) => {
      console.log("deleteProd ",res);
      if (res.success) {
        alert('Product Deleted Successfully!');
      } else if (res.error) {
        alert(res.error);
      }
    },
      err=> {
      console.log("deleteProd err",err);
    });
  }
  addProd(prodId) {
    console.log(prodId);
    const routeParams = this.activeRoute.snapshot.params;
    console.log(routeParams);
    this.http.post(this.auth.getDomainName() + '/api/plan/active/'+routeParams.planid+'/product/'+prodId+'/week/'+routeParams.weekid,{}).subscribe((res: any) => {
      console.log("addProd",res);
      if (res.success) {
        alert('Product Added Successfully!');
      } else if (res.error) {
        alert(res.error);
      }
    },
      err=> {
      console.log("addProd err",err);
    });
    
  }

  changeView(view) {
    this.view = view;
  }

  openModal(modal) {
    modal.open();
  }

  closeModal(modal) {
    modal.close();
    window.location.reload();
  }

  onClose() {
    window.location.reload();
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
  }
}
