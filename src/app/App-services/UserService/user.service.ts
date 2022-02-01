import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from '../Common/envoirment.service';
import { ContactUs,JoinUs } from 'src/app/App-model/user.model';
import { Save_Contactus, Save_joinus } from 'src/app/constants/constants';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  message!: string;
  token!: string;
  headers!: HttpHeaders;

  constructor(
    private http: HttpClient,
    private envService: EnvService,
  ) {  }
  
  public save_JoinUs(model: JoinUs) {
    let url = this.envService.apiUrl + Save_joinus;
    return this.http.post(url, model);
  }
  public save_ContactUs(model: ContactUs) {
    let url = this.envService.apiUrl + Save_Contactus;
    return this.http.post(url, model);
  }
}
