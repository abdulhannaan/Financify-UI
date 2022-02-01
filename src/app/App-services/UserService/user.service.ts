import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable, pipe } from 'rxjs';
import { Router } from '@angular/router';
import { map, shareReplay, catchError, switchMap, first, groupBy } from 'rxjs/operators';
import { LoaderService } from '../LoaderService/loader.service';
import { ConfigService } from '../Common/config.service';
import { EnvService } from '../Common/envoirment.service';
import { ContactUs, Employee, JoinUs } from 'src/app/App-model/user.model';
import { LoginModel, LoginResponse } from 'src/app/App-model/login.model';
import { AuthService } from '../AuthService/auth.service';
import { Delete_Contactus, Delete_joinus, Save_Contactus } from 'src/app/constants/constants';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  message!: string;
  token!: string;
  headers!: HttpHeaders;

  constructor(
    private http: HttpClient,
    private router: Router,
    public config: ConfigService,
    private loader: LoaderService,
    private envService: EnvService,
    private authService: AuthService
  ) {
    this.setHeaders();
  }
  setHeaders() {

    this.token = this.authService.getCurrentToken();
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
  }

  public save_JoinUs(model: JoinUs) {
    let url = this.envService.apiUrl + this.save_JoinUs;
    return this.http.post(url, model);
  }
  public list_JoinUs() {
    let url = this.envService.apiUrl + this.list_JoinUs;
    return this.http.get(url, { headers: this.headers });
  }
  public get_JoinUs(Id: string) {
    let url = this.envService.apiUrl + this.get_JoinUs + "?Id=" + Id;
    return this.http.get(url, { headers: this.headers });
  }
  public delete_JoinUs(Id: string) {
    let url = this.envService.apiUrl + Delete_joinus + "?Id=" + Id;
    return this.http.delete(url, { headers: this.headers });
  }
  public save_ContactUs(model: ContactUs) {
    let url = this.envService.apiUrl + Save_Contactus;
    return this.http.post(url, model);
  }
  public list_ContactUs() {
    let url = this.envService.apiUrl + this.list_ContactUs;
    return this.http.get(url, { headers: this.headers });
  }
  public get_ContactUs(Id: string) {
    let url = this.envService.apiUrl + this.get_ContactUs + "?Id=" + Id;
    return this.http.get(url, { headers: this.headers });
  }
  public delete_ContactUs(Id: string) {
    let url = this.envService.apiUrl + Delete_Contactus + "?Id=" + Id;
    return this.http.delete(url, { headers: this.headers });
  }

  public save_User(model: Employee) {
    let url = this.envService.apiUrl + Save_Contactus;
    return this.http.post(url, model);
  }
  public list_User() {
    let url = this.envService.apiUrl + this.list_User;
    return this.http.get(url, { headers: this.headers });
  }
  public get_User(Id: string) {
    let url = this.envService.apiUrl + this.get_User + "?Id=" + Id;
    return this.http.get(url, { headers: this.headers });
  }
  public delete_User(Id: string) {
    let url = this.envService.apiUrl + Delete_Contactus + "?Ids=" + Id;
    return this.http.delete(url, { headers: this.headers });
  }

}
