import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  selectedPlanId = null;
  plan = [{
    planId: "5bda9417e54a4134c021d769",
    planName: "Trial Week",
    planRate: "500Rs/bag",
    planText: "Try our snack bag of one week. You'll get one bag with 6 healthy snacks that will take care of your evening hunger pangs."
  },
  {
    planId: "5bd9418790e4ca11e070f31a",
    planName: "For 4 Weeks",
    planRate: "500Rs/bag",
    planText: "1 snack bag delivered each week for a period of 1 month"
  },
  {
    planId: "5bd941b790e4ca11e070f31b",
    planName: "For 12 Weeks",
    planRate: "500Rs/bag",
    planText: "1 snack bag delivered each week for a period of 6 months"
  }];
  questions = [{
    qId: 1,
    question: "Are you allergic to any of the following?",
    options: [{
      optionId: 1,
      optionText: "Milk",
      optName: "q1"
    },
    {
      optionId: 2,
      optionText: "Eggs",
      optName: "q1"
    },
    {
      optionId: 3,
      optionText: "Peanuts",
      optName: "q1"
    },
    {
      optionId: 4,
      optionText: "Other Nuts",
      optName: "q1"
    },
    {
      optionId: 5,
      optionText: "Wheat",
      optName: "q1"
    },
    {
      optionId: 6,
      optionText: "none",
      optName: "q1"
    }],
    images: [{
      url: "../../assets/peanut.png",
      alt: "peanut.png"
    },
    /*{
      url: "../../assets/chocolate-bar.png",
      alt: "chocolate_bar.png"
    }*/],
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
      url: "../../assets/strawberry.png",
      alt: "strawberry.png"
    }],
    class: "third_box",
    selectedOpt: null
  }
  ]

  constructor() { }


  ngOnInit() {
    console.log("hiiiiii", this.questions);
  }

  selectedPlan(selectedPlanId) {
    console.log("sel", selectedPlanId);
    this.selectedPlanId = selectedPlanId;
    
  }
  checkDelivery() {
    console.log("in check delivery");
    console.log("plan selected", this.selectedPlanId);
  }
}
