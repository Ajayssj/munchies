import { Component, OnInit,HostListener,ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../../user/auth.service';
import swal from 'sweetalert2';
import { element } from 'protractor';
interface productRes {
  success: boolean,
  data: object,
  message: string
}
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  view: String = 'company';
  products;
  productResponse;
  message = '';
  data = {};
  modalEl;
  pType = []; 
  selectedTypeId = '';
  selectCompanyId = '';
  productTypes = [];
  pCompany =[];
  productCompanies;
  productCompany = "";
  selectedCompanyId: any;
  companyName = [];
  companyId: any;
  selectedCompany = "No Selected Company";
  selectedCompanyName = "";
  selectedCompanyObj= {};
  selectedTypeObj= {};
  addCompanyName: string;
  addCompanyOnType: any;
  addType: any;
  addPname: any;
  addPtype: any;
  addPcompany: any;
  addPquantity: any;
  addPcost: any;
  addPmrp: any;
  addPallergyDetails: any;
  addPkcal: any;
  // product Tab var
  addProductArray = {};
  editProductArray = {};
  selectedProductObj = {};
  selectedWeeks = [];
  matchedCompanyName = [];
  hideAutoComplete: boolean = false;
  weeks = [];
  errorMessage = '';
  allergyDetails: Array<string>;
  hideWeekDrp = 0;
  public weekArray: Array<Object> = [{id: 1, text: 'Week 1'}, {id: 2, text: 'Week 2'}, {id: 3, text: 'Week 3'},
   {id: 4, text: 'Week 4'}, {id: 5, text: 'Week 5'}, {id: 6, text: 'Week 6'}, {id: 7, text: 'Week 7'}, 
   {id: 8, text: 'Week 8'}, {id: 9, text: 'Week 9'}, {id: 10, text: 'Week 10'}, {id: 11, text: 'Week 11'},
    {id: 12, text: 'Week 12'}];
    @HostListener('document:click', ['$event'])
    clickout(event) {
      console.log("click outside",event);
      if(!event.target.classList.contains("week-dropdown-btn")) {
      this.products.forEach(productItem =>{
        productItem.selectedWeek = null;
      })
    }
      this.cdRef.detectChanges();
    //  this.hideAutoComplete = false;

    }

  constructor(private http: HttpClient, private auth: AuthService,
    private cdRef:ChangeDetectorRef, private router: Router) { }
  ngOnInit() { 
    console.log("hiiiiiiiiiiiii", this.auth.getDomainName());
    this.productTypes = ['Laadu', 'Makhana', 'Energy Bars', 'Cookies', 
    'Khakra', 'Drink', 'Nut Mix', 'Crisps', 'Grain Pops', 
    'Vegetable', 'Chips', 'Fruity', 'honey sachet', 'tea bags', 'fresh fruit'];

    this.allergyDetails = ['Wheat', 'Milk', 'Eggs', 'Peanuts', 'Other nuts', 'none'];

    this.http.get(this.auth.getDomainName() + '/api/product').subscribe((res: any) => {
      this.productResponse = res.data;
      this.products = res.data.products;
      this.productResponse.products.forEach((element,index)=> {
        var uniqArr=[];
        element.weeks.forEach(item => {
          if(!(uniqArr.indexOf(item.week) > -1)) {
            uniqArr.push(item.week)
          }
        });
        console.log(element);
        this.productResponse.products[index].weeks = uniqArr;
      });
      console.log(this.productResponse);
      if(this.productResponse.companies.length > 0) {
        this.productResponse.companies.forEach(companyItem => {
          this.companyName.push(companyItem.company);
        })
      }
    },
    err=> {
      console.log(err);
    });
    
    

    // this.http.get(this.auth.getDomainName() + '/api/type').subscribe((res: productRes) => {
    //   console.log(res.data);
    //    companies[{ _id , company}]
    //   this.productTypes = res.data;
    // },
    // err=> {
    //   console.log(err);
    // });
    this.http.get(this.auth.getDomainName() + '/api/company').subscribe((res: any) => {
      console.log(res.data);
      this.productCompanies = res.data;
      this.productCompanies.forEach(element => {
        console.log(element);
        this.companyName.push(element.company);
      });
    },
    err=> {
      console.log(err);
    });
  }
//Delete code

  addWeekInProduct(weekItem,weekNo, productId) {
    console.log("weekItem,weekNo",weekItem,weekNo);
    if(!(weekItem.indexOf(weekNo) > -1)) {
      console.log("weekNo",weekItem)
      weekItem.push(weekNo)
    }
    this.http.post(this.auth.getDomainName() + '/api/plan/core/product/' + productId + '/week/' + weekNo, {})
    .subscribe((data: any)=> {
      console.log(data);
      if(!data.success) {
        this.errorMessage = data.error;
        alert(this.errorMessage);
      }
      else {
        this.errorMessage = '';
      }
    });
  } 
  removeWeekInProduct(weekItem,productId, weekId, modal) {
    if(weekItem.indexOf(weekId) > -1) {
      let indexOfItem = weekItem.indexOf(weekId);
      weekItem.splice(indexOfItem,1);
    }
    console.log(this.auth.getDomainName() + '/api/plan/core/product/' + productId + '/week/' + weekId);
    this.http.delete(this.auth.getDomainName() + '/api/plan/core/product/' + productId + '/week/' + weekId, {}).subscribe(data=> {
      console.log(data);
    });
    this.closeModal(modal);
  }

  deleteItem(pid, modal, index) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      productId: pid
    };
    this.data = {
      productId: pid
    }
    console.log(this.data);
    this.http.delete(this.auth.getDomainName() + '/api/product/delete/' + pid, {}).subscribe((res: productRes)=> {
      console.log(res.success);
        this.message = res.message; 
        // this.products = this.auth.getAllProducts();
        this.products.splice(index, 1);
        console.log(this.products);
        // this.scrollTop();
    },
    err=> {
      console.log(err);
    });
    this.closeModal(modal);
  }

  //Auto complete functionality

  ifMatchString(name,companyObj) {
    
    // this.ref.detectChanges();
    if(name && name.length > 0 && companyObj.includes(name)) {
      // this.hideAutoComplete = false;
      return true;
    }
    return false;
  }


  populateCompanyName(company) {
    this.addPcompany = company; 
    this.hideAutoComplete = false;
  }
  //Modal code
  openModal(modal) {
    modal.open();
  }

  closeModal(modal) {
    modal.close();
  }

  onClose() {
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
  }
  openCompanyEditModal() {
    console.log();
  }
  //change view code
  changeView(view) {
    this.view = view;
  }
  
addProduct(modal) {
    
    this.addProductArray = {
      name: this.addPname,
      type: this.addPtype,
      quantity: this.addPquantity,
      company: this.addPcompany,
      cost: this.addPcost,
      price: this.addPmrp,
      allergyDetails: this.addPallergyDetails,
      kcal: this.addPkcal,
      weeks: []
    }
    
    this.http.post(this.auth.getDomainName() + '/api/company/add', {company: this.addPcompany}).subscribe(data=>{
      console.log(data);
    }, 
    err=> {
      console.log(err);
    });
    this.http.post(this.auth.getDomainName() + '/api/product/add', this.addProductArray).subscribe((response: any)=>{
      console.log(response);
      if(response.success) {
        this.message = response.message;
        console.log(this.addProductArray)
        this.products.push(this.addProductArray);
        // this.scrollTop();
      }
    }, 
    err=> {
      console.log(err);
    });
    this.closeModal(modal);
  }
  //edit Compnay code
  editCompany(modal, selectedCompany) {
    this.selectedCompanyId = selectedCompany._id;
    this.productCompany = selectedCompany.company;
    this.http.put(this.auth.getDomainName() + '/api/company/edit', {company: this.productCompany, companyId: this.selectedCompanyId}).subscribe(data=>{
      console.log(data);
    }, 
    err=> {
      console.log(err);
    });
    this.closeModal(modal);
  }
  //edit Type code
  // editType(modal, selectedType) {
  //   this.pType = selectedType.type;
  //   this.selectedTypeId = selectedType._id;
  //   this.companyId = this.selectCompanyId;
  //   this.http.put(this.auth.getDomainName() + '/api/type/edit', {type: this.pType, typeId: this.selectedTypeId, companyId: this.companyId}).subscribe((data:any)=>{
  //     console.log(data);
  //      if(data && data.success) { this.productTypes.push(data) }
  //   }, 
  //   err=> {
  //     console.log(err);
  //   });
  //   this.closeModal(modal);
  // }
  //edit Product code
  editProduct(modal,selectedProduct) {
    this.editProductArray = {
      name: selectedProduct.name,
      type: selectedProduct.type,
      quantity: selectedProduct.quantity,
      company: selectedProduct.company,
      cost: selectedProduct.cost,
      price: selectedProduct.price,
      allergyDetails: selectedProduct.allergyDetails,
      kcal: selectedProduct.kcal,
      productId: selectedProduct._id
    }
    this.http.post(this.auth.getDomainName() + '/api/product/edit', this.editProductArray).subscribe(data=>{
      console.log(data);
    }, 
    err=> {
      console.log(err);
    });
    this.closeModal(modal);
  }
  // Multiple select
  
  // public items: Array<string> = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 
  // 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'];

  public value: any = ['Athens'];
  public id: any = ['1'];
  public _disabledV: string = '0';
  public disabled: boolean = false;

  public selected(value: any, productId): void {
    console.log('Selected value is: ', value);
    var weekId = value.id;
    this.http.post(this.auth.getDomainName() + '/api/plan/core/product/' + productId + '/week/' + weekId, {}).subscribe(data=> {
      console.log(data);
    });
  }

  public removed(value: any, productId): void {
    console.log('Removed value is: ', value);
    console.log('Removed value is: ', productId);
    console.log('removed value is: ', JSON.parse(value.id));
    var weekId = value.id;
    this.http.delete(this.auth.getDomainName() + '/api/plan/core/product/' + productId + '/week/' + weekId, {}).subscribe(data=> {
      console.log(data);
    });
  }

  public refreshValue(value: any): void {
    this.value = value;
  }

  public itemsToString(value: Array<any> = []): string {
    return value
      .map((item: any) => {
        return item.text;
      }).join(',');
  }
}
