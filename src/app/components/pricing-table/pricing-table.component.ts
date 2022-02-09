import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.scss']
})
export class PricingtableComponent implements OnInit {



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
