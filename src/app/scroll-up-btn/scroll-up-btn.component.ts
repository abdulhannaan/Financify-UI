import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-scroll-up-btn",
  templateUrl: "./scroll-up-btn.component.html",
  styleUrls: ["./scroll-up-btn.component.scss"],
})
export class ScrollUpBtnComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  scrolltotop() {
    window.scroll(0, 0);
  }
}
