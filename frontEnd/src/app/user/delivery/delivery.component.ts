import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
})
export class DeliveryComponent implements OnInit {
  deliveryForm: FormGroup;
  submitted = false;
  name = "";
  surName = "";
  area = "";
  address = "";
  phone = "";
  postalCode = "";
  data = {};
  httpOptions = {};
  isLoggedIn = this.auth.isLoggedIn();
  redirectToHome = "home";
  showOrderConfirmAlert = false;
  selectedPlanId = '';
  question1 = '';
  question2 = '';
  question3 = '';
  customerData = { 
    firstName: '',
    lastName: '',
    phoneNo: '',
    address: '',
    Area_of_delivery: '',
    postalCode: ''
  };
  urlParams = {
    // selectedPlan: '',
    // selectedPlanRate: '',
    // selectedPlanName: '',
    // q1: '',
    // q2: '',
    // q3: '',
    // deliveryCharge: '',
    // greenTeaCharge: ''
  };
  //showAlert = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private auth: AuthService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    if(JSON.parse(this.auth.getCustomerData())) {
      this.customerData = JSON.parse(this.auth.getCustomerData());
    }
    else {
      this.customerData = this.customerData;
    }
    console.log(this.customerData);
    // this.urlParams = this.auth.getQueryParams();
    // console.log(this.urlParams);
    this.deliveryForm = this.formBuilder.group({
      name: [this.customerData.firstName || '', [Validators.required,Validators.pattern('^[a-zA-Z]+')]], //Validators.pattern('^[a-zA-Z]+')
      area: [this.customerData.Area_of_delivery || '', Validators.required],
      surName: [this.customerData.lastName || '', [Validators.required,Validators.pattern('^[a-zA-Z]+')]],
      address: [this.customerData.address || '', Validators.required],
      phone: [this.customerData.phoneNo || '', [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[0-9]+')  // validates input is digit
      ]],
      postalCode: [this.customerData.postalCode || '', [Validators.required, Validators.pattern('^[0-9]{6}(?:-[0-9]{4})?$')]],
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.deliveryForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.deliveryForm.invalid) {
      return;
    }
    
    //this.http('', )
  }
  showOrderConfirm(){
    this.submitted = true;
    console.log(this.deliveryForm.value)
    // stop here if form is invalid
    if (this.deliveryForm.invalid) {
      return;
    }
    else
    {
      // var question1 = this.urlParams.q1;
      // var question2 = this.urlParams.q2;
      // var question3 = this.urlParams.q3;
      // var selectedPlanName = this.urlParams.selectedPlanName;
      // var selectedPlanRate = this.urlParams.selectedPlanRate;
      // var questionInfo =[]
      // if(question1 && question1.length > 0)  {
      //   question1.split(',').forEach(item => questionInfo.push({type: 'allergic', value: item}) )
        
      // }
      // if(question2 && question2.length > 0)  {
      //   question2.split(',').forEach(item => questionInfo.push({type: 'fruits', value: item}) )
      // }
      // if(question3 && question3.length > 0)  {
      //   question3.split(',').forEach(item => questionInfo.push({type: 'green_tea', value: item}) )
      // }
      
    this.data = {
      'firstName': this.f.name.value,
      'lastName': this.f.surName.value,
      'Area_of_delivery': this.f.area.value,
      'address': this.f.address.value,
      'phoneNo': this.f.phone.value,
      'postalCode': this.f.postalCode.value
      // ,
      // 'planId': this.route.snapshot.queryParamMap.get('selectedPlan')
      // ,
      // 'extraInfo': JSON.stringify(questionInfo)
    }
    // this.data['planName'] = selectedPlanName;
    // this.data['planRate'] = selectedPlanRate;
    

    // this.http.post(this.auth.getDomainName() + '/api/order/createOrder', this.data).subscribe((res : any) => {
    //   console.log("order created", res);
    //   this.showOrderConfirmAlert = true;
        
    // },
    //   err => {
    //     if(err.status == 401)
    //       alert(err.error.error);
    //     console.log(err);
    //   });
    this.auth.setCustomerData(JSON.stringify(this.data));
    this.router.navigate(['/order-summary']);
    }
  }

}
