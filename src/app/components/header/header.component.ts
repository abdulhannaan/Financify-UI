import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/App-model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  img: any;
  language: { name: string; svg: string; isDefault: boolean }[] | undefined;
  languageSelect: any = 'Swedish';
  defaultFalg: any = 'se.svg';

  constructor(public translate: TranslateService) {
    translate.addLangs(['English', 'Swedish']);
    translate.setDefaultLang('Swedish');
  }
  switchLanguage(lang: string) {
    this.languageSelect = lang;
    this.translate.use(lang);

    this.language?.forEach((element) => {
      if (element['name'] === lang) {
        this.defaultFalg = element['svg'];
      }
    });
  }
  ngOnInit() {
    this.language = [
      {
        name: 'Swedish',
        svg: 'se.svg',
        isDefault: true,
      },
      {
        name: 'English',
        svg: 'us.svg',
        isDefault: false,
      },
     
    ];
  }
 
}
