import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(public translate: TranslateService) { 
    translate.addLangs(['en','es']);
    translate.setDefaultLang('en');
  }
switchLanguage(lang:string){
  this.translate.use(lang);
}
  ngOnInit(): void {
  }

}


