import { Component, OnInit } from '@angular/core';
import { Options } from 'selenium-webdriver';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  
 
 
 
  constructor(private router: Router, private auth: AuthService,private http: HttpClient,private activatedRoute: ActivatedRoute) {}
 
  selectedIndex =[];
  selectedPlanId = null;
  noOfWeeks = 0;
  selectedPlanName = '';
  selectedPlanRate = '';
  queryParams = {};
  selectPlanError = '';
  optText = '';
  optIndex = [];
  queid= '';
  plan = [];
  questions = [
    {
    qId: 1,
    question: "Are you allergic to any of the following?",
    type:"allergic",
    options: [
      //{
    //   optionId: 1,
    //   optionText: "Milk",
    //   optName: "q1"
    // },
    {
      optionId: 1,
      optionText: "Eggs",
      optName: "q1",
      checked : false
    },
    {
      optionId: 2,
      optionText: "Peanuts",
      optName: "q1",
      checked : false
    },
    {
      optionId: 3,
      optionText: "Other Nuts",
      optName: "q1",
      checked : false
    },
    {
      optionId: 4,
      optionText: "Gluten",
      optName: "q1",
      checked : false
    },
    {
      optionId: 5,
      optionText: "None",
      optName: "q1",
      checked : false
    }],
    images: [{
      url: "../../assets/peanut.png",
      alt: "peanut.png"
    },
    {
      url: "../../assets/chocolate-bar.png",
      alt: "chocolate_bar.png"
    }],
    class: "first_box",
    selectedIndex:null
  },

  {
    qId: 2,
    question: "Pick fruits you don't like",
    type:"fruits",
    options: [{
      optionId: 1,
      optionText: "Banana",
      optName: "q2",
      checked : false
    },
    {
      optionId: 2,
      optionText: "Apple",
      optName: "q2",
      checked : false
    },
    {
      optionId: 3,
      optionText: "Pear",
      optName: "q2",
      checked : false
    },
    {
      optionId: 4,
      optionText: "Guava",
      optName: "q2",
      checked : false
    },
    {
      optionId: 5,
      optionText: "Mango",
      optName: "q2",
      checked : false
    },
    {
      optionId: 6,
      optionText: "Orange",
      optName: "q2",
      checked : false
    },
    {
      optionId: 7,
      optionText: "I Will Eat Any",
      optName: "q2",
      checked : false
    }],
    images: [{
      url: "../../assets/harvest.png",
      alt: "harvest.png"
    },
   
    {
      url: "../../assets/cheese.png",
      alt: "cheese.png"
    }],
    class: "second_box",
   
    selectedIndex:null
  },
  
  {
    qId: 3,
    type:"green_tea",
    planRate:39,
    question: "Should your bag contain green tea with honey sachets?",
    options: [{
      optionId: 1,
      optionText: "Yes",
      optName: "q3",
      checked : false
    },
    {
      optionId: 2,
      optionText: "No",
      optName: "q3",
      checked : false
    }],
    class: "third_box",
    selectedOpt: null,
    optionType:"radio",
    selectedIndex:null
  }
]
  
shippingCharges:any  = {
  'Cantonment' : 50,
  'Domlur' : 50,
  'Indiranagar' : 50,
  'Ulsoor' : 50,
  'Vasanth Nagar' : 50,
  'Koramangala' : 50,
  'Madiwala' : 50,
  'BTM_Layout' : 50,
  'Whitefield' : 50,
  'Marathahalli' : 50,
  'CV Raman Naga' : 50,
  default:50
}

  ngOnInit() {
    console.log("hiiiiii", this.questions);
    this.http.get(this.auth.getDomainName() + '/public/api/plan/core/').subscribe((res: any) => {
      // this.http.get('http://localhost:9191/public/api/coupan').subscribe((res: any)=> {
         console.log("res");
         console.log(res);
       this.plan = res.data.plans;
        
        
        console.log(this.plan);
        
         
    },
    err => {

    });
    
    
  }

  selectedPlan(itemObj) {
    this.selectedPlanId = itemObj._id;
    this.noOfWeeks = itemObj.weeks;
    this.selectedPlanName = itemObj.title;
    this.selectedPlanRate = itemObj.pricePerBag;
    
  }

  unSelectOthers(options) {
    console.log(options);
      // this.questions.forEach(question=> {
      //   if(question.type == "allergic") {
      //     question.options.forEach((option, index)=>{
      //       if(options.optionText == "None" && options.checked == true) {
      //         if(index != 4) {
      //           option.checked = false;
      //           console.log("option", "11111")
      //         }
      //       }
      //       else {
      //         if(index == 4) {
      //           console.log("option", "222222")
      //           option.checked = false;
      //         }
      //       }
      //     })
      //   }
      // });
      this.questions[0].options.forEach((option, index)=>{
        console.log(option, index)
        if(options.optionText == "None" && options.checked == true) {
          if(index != 4) {
            option.checked = false;
            console.log("option", "11111")
          }
        }
        else {
          if(index == 4) {
            console.log("option", "222222")
            option.checked = false;
          }
        }
      })
  }

  checkDelivery(element) {
    console.log("in check delivery",this.questions);
    console.log("plan selected", this.selectedPlanId);
    let obj = {};
    this.questions.forEach((question) => {
      let checked = question.options.filter(item => item.checked)
      let values = checked.map(item => item.optionText).join(',');
      (checked && checked.length)?obj[checked[0].optName] = values:'';
      if(question.optionType == "radio") {
        obj["q3"] = question.selectedIndex ? question.selectedIndex : '';
      }
    });
    
    

    console.log(obj);
    if(this.selectedPlanId == null || this.selectedPlanId == '') {
      this.selectPlanError = 'Please select a plan';
      console.log(element);
      element.scrollIntoView({ behavior: 'smooth' });
      this.router.navigate(['/subscribe']);
    }
    else {
       this.queryParams = { selectedPlan: this.selectedPlanId, selectedPlanRate: this.selectedPlanRate,
        selectedPlanName: this.selectedPlanName , ...obj ,deliveryCharge:this.shippingCharges.default, greenTeaCharge:39 };
       console.log(this.queryParams);
       this.selectPlanError = '';
       this.auth.setQueryParams(JSON.stringify(this.queryParams));
      this.router.navigate(['/delivery']);
    }
  }
  
}
