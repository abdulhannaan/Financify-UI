import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-services-text-area',
  templateUrl: './services-text-area.component.html',
  styleUrls: ['./services-text-area.component.scss']
})
export class ServicesTextAreaComponent implements OnInit {
  @Input()
  para!: string;
  @Input() 
  imgSrc:any;
  @Input() 
  heading!:string;
  @Input() 
  bool!:boolean;
  @Input() 
  icon!:string;
  constructor() {

    }

  ngOnInit(): void {
  }

}
