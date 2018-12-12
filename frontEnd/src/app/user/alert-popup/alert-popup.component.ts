import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-alert-popup',
  templateUrl: './alert-popup.component.html',
  styleUrls: ['./alert-popup.component.css']
})
export class AlertPopupComponent implements OnInit {
  @Input() showAlert:any
  @Input() okRedirectBtn;
  constructor( private router: Router) { }

  ngOnInit() {
    console.log("this",this)
   
  }
  redirect(){
    this.router.navigate(['/thank-you']);
  }

}
