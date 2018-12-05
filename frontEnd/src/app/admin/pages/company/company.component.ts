import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../user/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';
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
  deleteMessage = '';
  data = {};
  modalEl;
  pType = []; 
  selectedTypeId = '';
  selectCompanyId = '';
  productTypes;
  pCompany =[];
  productCompanies;
  productCompany = "";
  selectedCompanyId: any;
  companyName = [];
  companyId: any;
  selectedCompany = "No Selected Company";
  selectedCompanyName = "";
  addProductTypeForm: FormGroup;
  addProductCompanyForm: FormGroup;
  addProductForm: FormGroup;
  selectedCompanyObj= {};
  selectedTypeObj= {};
  // product Tab var
  addProductArray = {};
  editProductArray = {};
  selectedProductObj = {};
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private auth: AuthService) { }
  
  ngOnInit() {
    this.addProductTypeForm = this.formBuilder.group({
      pType: ['', Validators.required],
      selectedCompany: ['', Validators.required]
    });
    this.addProductCompanyForm = this.formBuilder.group({
      productCompany: ['', Validators.required]
    });
    this.addProductForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productType: ['', Validators.required],
      productCompanyName: ['', Validators.required],
      productQuantity: ['', Validators.required],
      productMrp: ['', Validators.required],
      productKcal: ['', Validators.required]
    });
    console.log("hiiiiiiiiiiiii", this.auth.getDomainName());
    this.http.get(this.auth.getDomainName() + '/api/product').subscribe((res: any) => {
      this.products = JSON.parse(JSON.stringify(res.data));
    },
    err=> {
      console.log(err);
    });
    
    this.http.get(this.auth.getDomainName() + '/api/type').subscribe((res: productRes) => {
      console.log(res.data);
      // companies[{ _id , company}]
      this.productTypes = res.data;
    },
    err=> {
      console.log(err);
    });
    this.http.get(this.auth.getDomainName() + '/api/company').subscribe((res: any) => {
      console.log(res);
      this.productCompanies = res.data;
      console.log(this.productCompanies);
      // this.productCompanies.forEach(element => {
      //   console.log(element);
      //   this.companyId.push(element._id);
      //   this.companyName.push(element.company);
      // });
    },
    err=> {
      console.log(err);
    });
  }
//Delete code
  deleteItem(pid, tabName) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      productId: pid
    };
    this.data = {
      productId: pid
    }
    console.log(this.data);
    this.http.delete(this.auth.getDomainName() + '/api/' + tabName + '/delete', httpOptions).subscribe((res: productRes)=> {
      console.log(res.success);
        this.deleteMessage = res.message; 
    },
    err=> {
      console.log(err);
    })
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
  //Add Company, Type and Product code
  onSubmit(modal, view) {
    this.companyId = this.addProductTypeForm.get("selectedCompany").value;
    if(view == "type") {
    this.pType = this.addProductTypeForm.get('pType').value;
    this.http.post(this.auth.getDomainName() + '/api/type/add', {type: this.pType, companyId: this.companyId}).subscribe((data:any)=>{
      console.log(data);
      // if(data && data.success) { this.productTypes.push(data) }
    }, 
    err=> {
      console.log(err);
    });
  }
  else if(view == "company") {
    this.productCompany = this.addProductCompanyForm.get('productCompany').value;
    this.http.post(this.auth.getDomainName() + '/api/company/add', {company: this.productCompany}).subscribe(data=>{
      console.log(data);
    }, 
    err=> {
      console.log(err);
    });
  }
  else if(view == "product") {
    this.addProductArray = {
      name: this.addProductForm.get('productName').value,
      type: this.addProductForm.get('productType').value,
      quantity: this.addProductForm.get('productQuantity').value,
      company: this.addProductForm.get('productCompanyName').value,
      price: this.addProductForm.get('productMrp').value,
      kcal: this.addProductForm.get('productKcal').value
    }
    this.http.post(this.auth.getDomainName() + '/api/product/add', this.addProductArray).subscribe(data=>{
      console.log(data);
    }, 
    err=> {
      console.log(err);
    });
  }
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
  editType(modal, selectedType) {
    this.pType = selectedType.type;
    this.selectedTypeId = selectedType._id;
    this.companyId = this.selectCompanyId;
    this.http.put(this.auth.getDomainName() + '/api/type/edit', {type: this.pType, typeId: this.selectedTypeId, companyId: this.companyId}).subscribe((data:any)=>{
      console.log(data);
      // if(data && data.success) { this.productTypes.push(data) }
    }, 
    err=> {
      console.log(err);
    });
    this.closeModal(modal);
  }
  //edit Product code
  editProduct(modal,selectedProduct) {
    this.editProductArray = {
      name: selectedProduct.name,
      type: selectedProduct.type,
      quantity: selectedProduct.quantity,
      company: selectedProduct.company,
      price: selectedProduct.price,
      kcal: selectedProduct.kcal,
      productId: selectedProduct._id
    }
    this.http.put(this.auth.getDomainName() + '/api/product/edit', this.editProductArray).subscribe(data=>{
      console.log(data);
    }, 
    err=> {
      console.log(err);
    });
    this.closeModal(modal);
  }
}
