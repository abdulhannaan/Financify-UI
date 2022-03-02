
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-umbrella-unemployment',
  templateUrl: './umbrella-unemployment.component.html',
  styleUrls: ['./umbrella-unemployment.component.scss'],
  animations:[
    trigger('fade',[
      transition('void=>*',[
        style({opacity:0}),
        animate(1000, style({opacity:1}))
      ])
    ])
  ]

})
export class UmbrellaUnemploymentComponent implements OnInit {
isShown=false;
isShown2=false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleShow(){
    this.isShown=!this.isShown;
  }
  toggleShow2(){
    this.isShown2=!this.isShown2;
  }
 
}


