import { Component, Input, OnInit, Output } from "@angular/core";
import { EventEmitter } from "events";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  @Input('mode') mode;
  AboutUs: string;
  OurBuinessExperties: string;
  response: Event;
  constructor() {

  }

  ngOnInit() {
    debugger;
    if(this.mode === 'about-us'){
      this.AboutUs ="About Us"
      this.OurBuinessExperties = "OUR BUSINESS EXPERTIES"
    }

    if(this.mode === 'contact-us'){
      this.AboutUs ="Contact"
      this.OurBuinessExperties = "GET IN TOUCH"
    }

    
  }


}
