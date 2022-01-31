import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable, pipe } from 'rxjs';
import { Router } from '@angular/router';
import {
  
} from 'src/app/constants/constants';
import { map, shareReplay, catchError, switchMap, first, groupBy } from 'rxjs/operators';
import { LoaderService } from '../LoaderService/loader.service';
import { ConfigService } from '../Common/config.service';
import { EnvService } from '../Common/envoirment.service';
import { } from 'src/app/App-model/user.model';
import { LoginModel, LoginResponse } from 'src/app/App-model/login.model';
import { AuthService } from '../AuthService/auth.service';


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

  // public getListState() {
  //   let url = this.envService.apiUrl + Get_ListState
  //   return this.http.get(url,{ headers: this.headers });
  // }
}
