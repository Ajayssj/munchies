import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../../user/auth.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
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
  products = [];
  deleteMessage = '';
  data = {};
  alertText: String;
  constructor(private http: HttpClient, private auth: AuthService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.activeRoute.snapshot.params;
    console.log(routeParams);
    this.http.get(this.auth.getDomainName() + '/api/plan/customize/'+routeParams.planid+'/week/'+routeParams.weekid).subscribe((res: any) => {
      console.log("weekProds",res.data);
      if (res.data && res.data.length) {
        // this.weeks = res.data[0].products;
        this.weeks = [...res.data[0].customWeekProducts,...res.data[0].defaultWeekProducts];
        console.log("weeksProducts",this.weeks);
        
      }
    },
      err=> {
      console.log(err);
    });

    this.http.get(this.auth.getDomainName() + '/api/product').subscribe((res: any) => {
      console.log(res.data);
      this.products = res.data.products;
    },
      err=> {
      console.log(err);
    });

  }

  deleteWeekProd(prodId, alertModal) {
    console.log(prodId);
    const routeParams = this.activeRoute.snapshot.params;
    console.log(routeParams);
    this.http.delete(this.auth.getDomainName() + '/api/plan/active/'+routeParams.planid+'/product/'+prodId+'/week/'+routeParams.weekid,{}).subscribe((res: any) => {
      console.log("deleteProd ",res);
      if (res.success) {
        // alert('Product Deleted Successfully!');
        this.alertText = "Product Deleted Successfully!";
        this.openModal(alertModal);
      } else if (res.error) {
        // alert(res.error);
          this.alertText = res.error;
          this.openModal(alertModal);
      }
    },
      err=> {
      console.log("deleteProd err",err);
    });
  }
  addProd(prodId, alertModal) {
    console.log(prodId);
    const routeParams = this.activeRoute.snapshot.params;
    console.log(routeParams);
    this.http.post(this.auth.getDomainName() + '/api/plan/active/'+routeParams.planid+'/product/'+prodId+'/week/'+routeParams.weekid,{}).subscribe((res: any) => {
      console.log("addProd",res);
      if (res.success) {
        // alert('Product Added Successfully!');
        this.alertText = "Product Added Successfully!";
        this.openModal(alertModal);
      } else if (res.error) {
        // alert(res.error);
          this.alertText = res.error;
          this.openModal(alertModal);
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

  closeAlertModal(modal) {
    modal.close();
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
