import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-main-image',
  templateUrl: './main-image.component.html',
  styleUrls: ['./main-image.component.scss']
})
export class MainImageComponent implements OnInit {
@Input() HomeName: any;
@Input() pageName: any;
@Input() pageName2: any;
@Input() paragraph: any;
@Input() pageNameHeading: any;

  constructor() { }

  ngOnInit(): void {
  }

}
