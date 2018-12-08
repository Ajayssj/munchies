import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
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

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private auth: AuthService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.deliveryForm = this.formBuilder.group({
      name: ['', Validators.required],
      area: ['', Validators.required],
      surName: ['', Validators.required],
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
    this.data = {
      firstName: this.f.name.value,
      lastName: this.f.surName.value,
      Area_of_delivery: this.f.area.value,
      address: this.f.address.value,
      phoneNo: this.f.phone.value,
      postalCode: this.f.postalCode.value,
      planId: this.route.snapshot.queryParamMap.get('selectedPlan'),
      weeks : this.route.snapshot.queryParamMap.get('week')
    }
    this.httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache'
      })
    };
    console.log("route params", this.data)

    this.http.post(this.auth.getDomainName() + '/api/order/createOrder', this.data).subscribe(data => {
      console.log("order created", data);
    },
      err => {
        console.log(err);
      });
    //this.http('', )
  }

}
