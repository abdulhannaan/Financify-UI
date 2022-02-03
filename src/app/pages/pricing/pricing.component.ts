import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
item1:boolean=true;
item2!:boolean;
item3!:boolean;

btnStatus1: boolean = true;
btnStatus2: boolean = false;
btnStatus3: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
buttonTriggerEvent(){

}

  button1Items(){
    this.item1=true;
    this.item2=false;
    this.item3=false;

    this.btnStatus1=true;
    this.btnStatus2=false;
    this.btnStatus3=false;
  }
  button2Items(){
    this.item1=false;
    this.item2=true;
    this.item3=false;

    this.btnStatus1=false;
    this.btnStatus2=true;
    this.btnStatus3=false;
    
  }
  button3Items(){
    this.item1=false;
    this.item2=false;
    this.item3=true;

    this.btnStatus1=false;
    this.btnStatus2=false;
    this.btnStatus3=true;
    
  }



}
