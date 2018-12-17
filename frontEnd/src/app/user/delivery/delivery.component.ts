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
  //showAlert = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private auth: AuthService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.deliveryForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+')]],
      area: ['', Validators.required],
      surName: ['', [Validators.required , Validators.pattern('^[a-zA-Z]+')]],
      address: ['', Validators.required],
      phone: ['', [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('[0-9]+')  // validates input is digit
      ]],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}(?:-[0-9]{4})?$')]],
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
    // stop here if form is invalid
    if (this.deliveryForm.invalid) {
      return;
    }
    else
    {
      var question1 = this.route.snapshot.queryParamMap.get('question1');
      var question2 = this.route.snapshot.queryParamMap.get('question2');
      if(question1 != '' && question2 != '' ) {
      var questionInfo = [{type: 'allergic', value: question1},
                    {type: 'fruits', value: question2} ];
      }
    this.data = {
      firstName: this.f.name.value,
      lastName: this.f.surName.value,
      Area_of_delivery: this.f.area.value,
      address: this.f.address.value,
      phoneNo: this.f.phone.value,
      postalCode: this.f.postalCode.value,
      planId: this.route.snapshot.queryParamMap.get('selectedPlan'),
      weeks : this.route.snapshot.queryParamMap.get('week'),
      extraInfo: questionInfo
    }
    this.httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache'
      })
    };
    console.log("route params", this.data)

    this.http.post(this.auth.getDomainName() + '/api/order/createOrder', this.data).subscribe((res : any) => {
      console.log("order created", res);
      this.showOrderConfirmAlert = true;
        
    },
      err => {
        if(err.status == 401)
          alert(err.error.error);
        console.log(err);
      });
    }
  }

}
