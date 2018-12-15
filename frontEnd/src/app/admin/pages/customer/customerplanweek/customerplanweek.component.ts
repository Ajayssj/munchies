import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../../user/auth.service';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../../shared/services/global.service';
import { RootComponent } from '../../../shared/roots/root.component';
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
  filterWeekProds = [];
  deleteMessage = '';
  data = {};
  alertText: String;
  addSuccess= false;
  constructor(private http: HttpClient, private auth: AuthService, private activeRoute: ActivatedRoute, public _globalService: GlobalService) {
  }

  ngOnInit() {
    const routeParams = this.activeRoute.snapshot.params;
    console.log(routeParams);
    this.http.get(this.auth.getDomainName() + '/api/plan/customize/'+routeParams.planid+'/week/'+routeParams.weekid).subscribe((res: any) => {
      console.log("weekProds",res.data);
      if (res.data && res.data.length) {
        this.weeks = res.data[0].products;
        console.log("weeksProducts",this.weeks);
        this.getAllProducts();
      }
    },
      err=> {
      console.log(err);
      this.getAllProducts();
    });
  }

  getAllProducts(){
    this.http.get(this.auth.getDomainName() + '/api/product').subscribe((res: any) => {
      console.log(res.data);
      if (res.data.products) {
        this.filterWeekProds = res.data.products;
        for (let wp = 0; wp < this.weeks.length; wp++) {
          for (let p = 0; p < res.data.products.length; p++) {
            if (this.weeks[wp]["_id"] == res.data.products[p]["_id"]) {
              this.filterWeekProds.splice(p,1);
            }
          }
        }
        console.log("this.products = this.filterWeekProds", this.products ,this.filterWeekProds);
        this.products = this.filterWeekProds;
      }
    },
      err=> {
      console.log(err);
    });
  }

  deleteWeekProd(prodId, index, alertModal) {
    console.log(prodId);
    const routeParams = this.activeRoute.snapshot.params;
    console.log(routeParams);
    this.http.delete(this.auth.getDomainName() + '/api/plan/active/'+routeParams.planid+'/product/'+prodId+'/week/'+routeParams.weekid,{}).subscribe((res: any) => {
      console.log("deleteProd ",res);
      if (res.success) {
        // alert('Product Deleted Successfully!');
        // this.alertText = "Product Deleted Successfully!";
        // this.openModal(alertModal);
        this.notification('success', 'Product Deleted!', '');
        this.products.push(this.weeks[index]);
        this.weeks.splice(index, 1);
      } else if (res.error) {
        // alert(res.error);
        // this.alertText = res.error;
        // this.openModal(alertModal);
        this.notification('danger', 'Product Delete Error!', res.error);
      }
    },
      err=> {
      console.log("deleteProd err",err);
    });
  }
  addProd(prodId, index, alertModal) {
    console.log(prodId);
    var isExist = false;
    for (let wp = 0; wp < this.weeks.length; wp++) {
      if (this.weeks[wp]["_id"] == prodId) {
        isExist = true;
        // alert("Product already exist!");
      }
    } 
    if (!isExist) {
      const routeParams = this.activeRoute.snapshot.params;
      console.log(routeParams);
      this.http.post(this.auth.getDomainName() + '/api/plan/active/'+routeParams.planid+'/product/'+prodId+'/week/'+routeParams.weekid,{}).subscribe((res: any) => {
        console.log("addProd",res);
        if (res.success) {
          // alert('Product Added Successfully!');
          // this.alertText = "Product Added Successfully!";
          // this.openModal(alertModal);
          this.notification('success', 'Product Added!', '');
          this.addSuccess = true;
          this.weeks.push(this.products[index]);
          this.products.splice(index,1);
        } else if (res.error) {
          // alert(res.error);
          // this.alertText = res.error;
          // this.openModal(alertModal);
          this.notification('danger', 'Product Add Error!', res.error);
        }
      },
        err=> {
        console.log("addProd err",err);
      });
    }
  }

  changeView(view) {
    this.view = view;
  }

  openModal(modal) {
    modal.open();
  }

  closeModal(modal) {
    modal.close();
  }

  closeAlertModal(modal) {
    modal.close();
    
  }

  onClose() {
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
  }

  notification(type, title, text) {
    swal({
      type: type,
      title: title,
      text: text,
    });
  }

}
