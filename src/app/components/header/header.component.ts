import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(public translate: TranslateService) { 
    translate.addLangs(['English','Swedish']);
    translate.setDefaultLang('English');
  }
switchLanguage(lang:string){
  this.translate.use(lang);
  const x=lang;
  console.log("this is" + x)

 
}
  ngOnInit(): void {
  }

 

}
