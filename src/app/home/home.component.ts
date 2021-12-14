import { trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import * as AOS from "aos";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  i = 0;
  maintxt = "";
  subtxt = "";
  imgSrc = "";
  iteration = "";
  animation = "fade-zoom-in";
  data = [
    {
      maintxt: "Company Registratorn (Bolagsbildning)",
      subtxt: "Company Registration ",
      imgSrc: "/assets/Images/Registration.jpg",
      iteration: "01",
    },
    {
      maintxt: "Bookkeeping (Bokföring)",
      subtxt: "Accountancy services ",
      imgSrc: "/assets/Images/bookskeeping.jpg",
      iteration: "02",
    },
    {
      maintxt: "Payroll Services",
      subtxt: "Payroll administration of clients",
      imgSrc: "/assets/Images/Payroll.jpg",
      iteration: "03",
    },
    {
      maintxt: "Contracting",
      subtxt: "Arrange payroll and tax service for the consultants ",
      imgSrc: "/assets/Images/Contracting.jpg",
      iteration: "04",
    },
  ];
  constructor() {
    this.changeData("n");
  }
  changeData(operation) {
    if (operation == "f" && this.i != 3) this.i++;
    else if (operation == "b" && this.i != 0) this.i--;
    else if (operation == "n") this.i = this.i;
    else return;

    this.imgSrc = this.data[this.i].imgSrc;
    this.maintxt = this.data[this.i].maintxt;
    this.subtxt = this.data[this.i].subtxt;
    this.iteration = this.data[this.i].iteration;
    if (operation != "n") {
      AOS.init({
        duration: 1200,
      });
    }
  }
  onMouseWheel(evt) {
    debugger;
    if (evt.deltaY < 0) {
      this.changeData("b");
    } else if (evt.deltaY > 0) {
      this.changeData("f");
    }
  }
  ngOnInit() {}
}
