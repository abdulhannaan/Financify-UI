import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/App-model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  x: any;
  language: { name: string; svg: string; isDefault: boolean; }[] | undefined;
  constructor(public translate: TranslateService) {
  
    translate.addLangs(['English', 'Swedish']);
    translate.setDefaultLang('English');
  }
  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
  ngOnInit() {
    this.language = [
      {
        name: 'English',
        svg: 'us.svg',
        isDefault: true,
      },
      {
        name: 'Swedish',
        svg: 'se.svg',
        isDefault: false,
      },
    ];
  }
}
