import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  constructor(private router: Router) {}
  selectedPlanId = null;
  noOfWeeks = 0;
  selectedPlanName = '';
  selectedPlanRate = '';
  plan = [{
    planId: "5c0e2531cdfb5107849569ea",
    planName: "Trial Week",
    planRate: "499",
    planText: "Try our Munchpak Bag today!",
    weeks : 4
  },
  {
    planId: "5c0e2571cdfb5107849569ef",
    planName: "For 4 Weeks",
    planRate: "1950",
    planText: "1 snack bag delivered each week every Monday for 4 weeks! ",
    weeks : 4
  },
  { 
    planId: "5c0e258acdfb5107849569f4",
    planName: "For 12 Weeks",
    planRate: "1950",
    planText: "1 snack bag delivered each week every Monday for 12 weeks!",
    weeks : 12
  }];
  questions = [{
    qId: 1,
    question: "Are you allergic to any of the following?",
    options: [
      //{
    //   optionId: 1,
    //   optionText: "Milk",
    //   optName: "q1"
    // },
    {
      optionId: 1,
      optionText: "Eggs",
      optName: "q1"
    },
    {
      optionId: 2,
      optionText: "Peanuts",
      optName: "q1"
    },
    {
      optionId: 3,
      optionText: "Other Nuts",
      optName: "q1"
    },
    {
      optionId: 4,
      optionText: "Gluten",
      optName: "q1"
    },
    {
      optionId: 5,
      optionText: "none",
      optName: "q1"
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
    selectedOpt: null
  },
 /* {
    qId: 2,
    question: "Pick flavours you don't like",
    options: [{
      optionId: 1,
      optionText: "Chocolate",
      optName: "q2"
    },
    {
      optionId: 2,
      optionText: "Strawberry",
      optName: "q2"
    },
    {
      optionId: 3,
      optionText: "Mint",
      optName: "q2"
    },
    {
      optionId: 4,
      optionText: "Tomato",
      optName: "q2"
    },
    {
      optionId: 5,
      optionText: "No Preference",
      optName: "q2"
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
    selectedOpt: null
  },*/
  {
    qId: 2,
    question: "Pick fruits you don't like",
    options: [{
      optionId: 1,
      optionText: "Banana",
      optName: "q3"
    },
    {
      optionId: 2,
      optionText: "Apple",
      optName: "q3"
    },
    {
      optionId: 3,
      optionText: "Pear",
      optName: "q3"
    },
    {
      optionId: 4,
      optionText: "Guava",
      optName: "q3"
    },
    {
      optionId: 5,
      optionText: "Mango",
      optName: "q3"
    },
    {
      optionId: 6,
      optionText: "No Preference",
      optName: "q3"
    }],
    images: [{
      url: "../../assets/harvest.png",
      alt: "harvest.png"
    },
   
    {
      url: "../../assets/cheese.png",
      alt: "cheese.png"
    }],
    class: "third_box",
    selectedOpt: null
  }
  ]


  ngOnInit() {
    console.log("hiiiiii", this.questions);
  }

  selectedPlan(itemObj) {
    this.selectedPlanId = itemObj.planId;
    this.noOfWeeks = itemObj.weeks;
    this.selectedPlanName = itemObj.planName;
    this.selectedPlanRate = itemObj.planRate;
    
  }
  checkDelivery() {
    console.log("in check delivery");
    console.log("plan selected", this.selectedPlanId);
    if(this.selectedPlanId == null || this.selectedPlanId == '') {

      this.router.navigate(['/subscribe']);
    }
  }
}
