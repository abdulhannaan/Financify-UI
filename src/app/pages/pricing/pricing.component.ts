import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  item1: number=1;
  constructor() { }

  ngOnInit(): void {
  }
buttonTriggerEvent(){

}

  button1Items(){
    this.item1=1  
  }
  button2Items(){
    this.item1=2
   
  }
  button3Items(){
    this.item1=3

  }



}
