import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../user/auth.service'
import * as cc from 'coupon-code';
import { AlertPopupComponent } from '../../../user/alert-popup/alert-popup.component';


@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnInit {
  coupans={};
  coupansres=[];
  coupanCode='';
  addCoupanArray= {};
  data={};
  editCoupanArray = {};
  addctitle : string;
  addccode : any;
  addcexpiry: string;
  addcdiscount:string;
  addcfrq:string;
  addcdes:string;
  addctype:number;
  selectedCoupanObj:{ title:'',code:'',expiry:'',discount:'',frequency:'',description:'',type:''};
  CoupanObj={};
  ccode:string;
  ctitle:string;
  cid:string;


  constructor(private http: HttpClient, private auth: AuthService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.http.get(this.auth.getDomainName() + '/api/coupan').subscribe((res: any) => {
   // this.http.get('http://localhost:9191/public/api/coupan').subscribe((res: any)=> {
      console.log("res");
      console.log(res);
     if(res.success){
        console.log(res.data);
        
        this.coupansres = res.data;
       
       console.log(this.coupansres);
    
      
      
        }
      else{
         console.log("error");
      }
      
   },
    err => {

    });
  }
  openModal(modal) {
    modal.open();
  }

  closeModal(modal) {
    modal.close();
  }
  createCoupan(){
        
    var cc = require('coupon-code');    
// generate a 4 part code
this.addccode = cc.generate({ parts : 4 });
this.coupanCode = this.addccode;
console.log("generated code");
console.log(this.addccode);

  }
  addCoupan(modal) {
 

      this.addCoupanArray = {
      title: this.addctitle,
      frequency: this.addcfrq,
      discount: this.addcdiscount,
      description: this.addcdes,
      expiry: this.addcexpiry,
      type: this.addctype,
      coupan:this.addccode
    }
      // console.log("array data");
      // console.log(this.addCoupanArray);
      // console.log("title")
      // console.log(this.addctitle);
      // if(this.addctitle!==this.ctitle )
      // {
        this.http.post(this.auth.getDomainName() + '/api/coupan', this.addCoupanArray).subscribe((res: any) => {    
    // this.http.post('http://localhost:9191/public/api/coupan', this.addCoupanArray).subscribe((res:any)=>{
         if(res.success){
          console.log('sucess');
          alert("your coupan added successfully !");
         }
          else
            {
              alert(res.error);
             }
          }, 
     err=> {
            console.log(err);
          });
  
   this.closeModal(modal);
 }
  editCoupan(modal,selectedCoupan,pid) {
    this.editCoupanArray = {
      title: selectedCoupan.title,
      frequency: selectedCoupan.frequency,
      discount: selectedCoupan.discount,
      description: selectedCoupan.description,
      expiry: selectedCoupan.expiry,
      type: selectedCoupan.type,
      coupan: selectedCoupan.code,
      coupanId:pid

 }
 console.log(this.editCoupanArray);
      this.http.put(this.auth.getDomainName() + '/api/coupan', this.editCoupanArray).subscribe((data) => {
   // this.http.put('http://localhost:9191/public/api/coupan', this.editCoupanArray).subscribe(data=>{
      console.log(data);
      console.log(selectedCoupan.type);
      alert("your coupan modified successfully !");
    
    }, 
    err=> {
      console.log(err);
    });
    this.closeModal(modal);
  }
  deleteItem(pid, modal, index) {
    console.log(pid);
    this.http.delete(this.auth.getDomainName() + '/api/coupan/'+ pid, this.editCoupanArray).subscribe((data) => {
    // this.http.delete('http://localhost:9191/public/api/coupan/'+ pid, this.editCoupanArray).subscribe(data=>{
      console.log(data);
      alert("your coupan removed successfully !");
    }, 
    err=> {
      console.log(err);
    });
    this.closeModal(modal);
  }

  //getCoreDate(date = new Date(new Date().toUTCString())){
    // return (new Date(new Date(new Date( new Date(date).setHours(0)).setMinutes(0)).setSeconds(0)))
   // return new Date(date.toLocaleDateString());
 // }

}
