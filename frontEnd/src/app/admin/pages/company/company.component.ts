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
  productTypes;
  pCompany;
  productCompanies;
  productCompany = "";
  companyName = [];
  companyId: any;
  selectedCompany = "No Selected Company";
  selectedCompanyName = "";
  addProductTypeForm: FormGroup;
  addProductCompanyForm: FormGroup;
  editProductCompanyForm: FormGroup;
  editProductTypeForm: FormGroup;
  selectedCompanyObj= {};
  selectedTypeObj= {};
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private auth: AuthService) { }
  
  ngOnInit() {
    console.log("hiiiiiiiiiiiii", this.auth.getDomainName());
    this.http.get(this.auth.getDomainName() + '/api/product').subscribe((res: productRes) => {
      console.log(res.data);
      this.products = res.data;
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
    this.addProductTypeForm = this.formBuilder.group({
      pType: ['', Validators.required],
      selectedCompany: ['', Validators.required]
    });
    this.addProductCompanyForm = this.formBuilder.group({
      productCompany: ['', Validators.required]
    });
    this.editProductCompanyForm = this.formBuilder.group({
      productCompany: ['', Validators.required]
    });
    this.editProductTypeForm = this.formBuilder.group({
      pType: ['', Validators.required],
      selectedCompany: ['', Validators.required]
    });
  }
  editProduct(pid, mid) {
    console.log("edit product", pid);
  }
  deleteProduct(pid) {
    this.data = {
      productId: pid
    }
    console.log(this.data);
    this.http.delete(this.auth.getDomainName() + '/api/product/delete/', this.data).subscribe((res: productRes)=> {
      console.log(res.success);
        this.deleteMessage = res.message; 
    },
    err=> {
      console.log(err);
    })
  }
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

  changeView(view) {
    this.view = view;
  }
  onSubmit(modal, view) {
    this.companyId = this.addProductTypeForm.get("selectedCompany").value;
    console.log("hiiiiiiiiiii", this.companyId);
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
    this.closeModal(modal);
  }
  editOnSubmit(modal, view, id) {
    this.companyId = this.editProductTypeForm.get("selectedCompany").value;
    console.log("hiiiiiiiiiii", this.companyId);
    if(view == "type") {
    this.pType = this.editProductTypeForm.get('pType').value;
    this.http.put(this.auth.getDomainName() + '/api/type/edit', {type: this.pType, typeId: id, companyId: this.companyId}).subscribe((data:any)=>{
      console.log(data);
      // if(data && data.success) { this.productTypes.push(data) }
    }, 
    err=> {
      console.log(err);
    });
  }
  else if(view == "company") {
    this.productCompany = this.editProductCompanyForm.get('productCompany').value;
    this.http.put(this.auth.getDomainName() + '/api/company/edit', {company: this.productCompany, companyId: id}).subscribe(data=>{
      console.log(data);
    }, 
    err=> {
      console.log(err);
    });
  }
    this.closeModal(modal);
  }

  public value: any = {};
  public _disabledV: string = '0';
  public disabled: boolean = false;
  
  public selectedCompanyDetails(value: any): void {
    console.log('Selected value is: ', value);
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public typed(value: any): void {
    console.log('New search input: ', value);
  }

  public refreshValue(value: any): void {
    this.value = value;
  }

}
