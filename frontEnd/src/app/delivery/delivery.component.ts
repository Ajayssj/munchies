import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { from } from 'rxjs';

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
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient) { }

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
      name: this.f.name.value,
      surName: this.f.surName.value,
      area: this.f.area.value,
      address: this.f.address.value,
      phoneNumber: this.f.phone.value,
      postalCode: this.f.postalCode.value
    }
    this.http.post('http:9191//api/order/createOrder', this.data).subscribe(data=> {
      console.log(data);
    },
    err=> {
      console.log(err);
    });
    //this.http('', )
  }

}
