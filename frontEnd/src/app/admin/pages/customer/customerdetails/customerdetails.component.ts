import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from '../../../../user/auth.service';

@Component({
  selector: 'app-custdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
  view: String = 'user';
  users = [];
  deleteMessage = '';
  data = {};
  tableData: Array<any>;

  /* pagination Info */
  pageSize = 10;
  pageNumber: number = 1;
  pages = [];
  limit = 10;
  pageChanged(pN: number): void {
    this.pageNumber = pN;
    console.log(pN);
    this.getData(this.pageNumber, this.limit);
  }
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router) { }
  acceptOrder(id,state,index){
    this.http.put(this.auth.getDomainName() + '/api/order/accept/'+ id ,{ state : state}).subscribe((res : any) => {
        if(res.success){
          this.users[index].isAccepted = state;
        }else{
          alert(res.error);
        }
    })
  }
  getNextWeek(user){
    let activeWeek = this.getActiveWeek(user.planInfo.startDate);
    if(activeWeek){
      if((activeWeek + 1) <= user.planInfo.weeks){
        return {success : true, value : activeWeek + 1}
      }else{
        return {success : false, value : 'No Next Week'}
      }
    }else{
      return {success : true, value : 1}
    }
  }


  getActiveWeek(startDate) {
    let start : any = new Date(startDate);
    let today : any = new Date();
    if( this.getCoreDate() >= this.getCoreDate(start))
      return Math.ceil(Math.abs(Math.floor(( start - today ) / 86400000)) / 7);
    else
      return 0;
  }
  
  getNextWeekId(weekNo,weekArray){
    return weekArray.find(item => item.week == weekNo);
  }

  skipThisWeek(weekObj,activePlanId){
      return this.http.put(this.auth.getDomainName() + '/api/plan/active/'+ activePlanId +'/skip-week/'+ weekObj._id + '/' + weekObj.week ,{})
  }
  getCoreDate(date = new Date(new Date().toUTCString())){
    // return (new Date(new Date(new Date( new Date(date).setHours(0)).setMinutes(0)).setSeconds(0)))
    return new Date(date.toLocaleDateString());
  }
  skipNextWeek(order, index, alertModal) {
    let actweek : number;
    // order.planInfo.startDate = new Date('12-5-2018')
    if(this.getCoreDate() >=  this.getCoreDate(new Date(order.plans.startDate))){
      actweek = this.getActiveWeek(new Date(order.plans.startDate));
      let nextWeek = actweek + 1;
      if(this.notLastWeek(nextWeek,order.plans.weeks)){
        console.log('Active Week : ' + actweek);
        let weekObj = this.getNextWeekId(nextWeek,order.weekIds);
        if(weekObj){
          if(!this.isThisWeekSkip(order.plans.skipedWeeks,weekObj._id)){
            this.skipThisWeek(weekObj,order.plans._id).subscribe((res: any) => {
              if (res.success) {
                /* this.alertText = 'Week Skiped Successfully!';
                this.openModal(alertModal); */
                alert(res.message);
                // window.location.reload();
              } else if (res.error) {
                alert(res.error);
               /*  this.alertText = res.error;
                this.openModal(alertModal); */
              }
            },
              err=> {
              console.log("skipWeek err",err);
            });
          }else{
            alert('This Week was Skiped Already!');
          }
        }else{
          alert('No Week\'s Data Found');
        }
      }else{
        alert('This is last Week!');
      }
      
    }else{
      alert('Your Plan Not Activated Yet!')
    }
  }
  isThisWeekSkip(skipWeeks,weekId){
    return skipWeeks.find(item => item.wId = weekId);
  }
  notLastWeek(weekNo,maxWeek){
    return (maxWeek > weekNo )
  }
  getWeekArray = (weekNo) => new Array(weekNo);

  shouldButtonDisabled(user){
    let actweek : number;
    // user.plans.startDate = new Date('12-5-2018')
    let currentDate = this.getCoreDate();
    let startDate =  this.getCoreDate(new Date(user.planInfo.startDate));
    console.log(currentDate + ' : ' + startDate);
    console.log(currentDate.getTime() +'  > = '+ startDate.getTime());
    if(currentDate.getTime() >= startDate.getTime()){
      actweek = this.getActiveWeek(new Date(user.planInfo.startDate));
      let nextWeek = actweek + 1;
      if(this.notLastWeek(nextWeek,user.planInfo.weeks)){
        let weekObj = this.getNextWeekId(nextWeek,user.weekIds);
        if(weekObj){
          if(!this.isThisWeekSkip(user.planInfo.skipedWeeks,weekObj._id)){
            return {state : false ,label :'Skip Next Week'};  
          }else{
            return {state : true ,label : 'Already Skiped'};
          }
        }else{
          return {state : true ,label :'Not Found'};
        }
      }else{
        return {state : true ,label :'No Next Week'};
      }
    }else{
      return {state : true ,label :'Not Started Yet'};
    }
  }

  ngOnInit() {
//let params = new HttpParams();
    //params = params.set('pageNo', this.pageNumber)
    //this.http.get(url,  { params: params })
    this.getData(this.pageNumber, this.limit);

  }

  viewUserWeek(user) {
    
    let res = this.getNextWeek(user);
    if(res.success){
      
      let nextWeek = this.getNextWeek(user).value;
      
      var userId = user.user._id;
      var activeplanID = user.planInfo._id;
      let weekId = this.getNextWeekId(nextWeek,user.weekIds)._id;
      this.router.navigateByUrl('/admin/pages/customer/cust/'+userId+'/plan/'+activeplanID+'/week/'+weekId);
    }else{
      alert(res.value);
    }
    
  }
  viewUserPlan(userId, planId) {
    console.log(userId, planId);
    this.router.navigateByUrl('/admin/pages/customer/cust/'+userId+'/plan/'+planId);
  }
  viewCustomerInfo(activePlanId) {
    this.router.navigateByUrl('/admin/pages/customer/customerInfo/' + activePlanId);
  }
  changeView(view) {
    this.view = view;
  }
  getData(pageNo, limit) {
    this.http.get(this.auth.getDomainName() + '/api/order/getAllOrders', {
      params: {
        pageNo: pageNo,
        size: limit
      }
    }).subscribe((res: any) => {
      console.log("cust",res.data);
      this.users = res.data.orders;
       let totalRecords = res.data.totalCount;
       let pages =  Math.ceil(totalRecords / this.limit);
       this.pages = new Array(pages);
       console.log(pages);
       console.log(this.pages);
    },
      err=> {
      console.log(err);
    });
  }
}