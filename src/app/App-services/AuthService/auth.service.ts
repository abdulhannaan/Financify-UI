import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, observable, pipe, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Login_Token_Create } from 'src/app/constants/constants';
import { map, shareReplay, catchError, switchMap, first, groupBy } from 'rxjs/operators';
import { LoaderService } from '../LoaderService/loader.service';
//import { ConfigService } from '../Common/config.service';
import { Employee} from 'src/app/App-model/user.model';
import { LoginModel, LoginResponse } from 'src/app/App-model/login.model';
import { EnvService } from '../Common/envoirment.service';


@Injectable({
  providedIn: "root"
})
export class AuthService {
  private UserContextVMCache$!: Observable<any>;
  public userContextVM!: Employee;
  public parentModuleName!: string;
  public currentUserId!: number;
  public userToken!: string;
  private currentUserSubject: BehaviorSubject<Employee>;
  private currentUserTokentSubject: BehaviorSubject<string>;
  ImageUrl!: string;
  serverUrl: string;
  userId!: number;
  documentType: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    //public config: ConfigService,
    private loader: LoaderService,
    private envService: EnvService) {

    this.serverUrl = this.envService.serverUrl;
    this.currentUserSubject = new BehaviorSubject<Employee>(JSON.parse(sessionStorage.getItem('currentUser')!));
    this.currentUserTokentSubject = new BehaviorSubject<string>(sessionStorage.getItem('currentToken')!);

  }


  public login(model: LoginModel): Observable<boolean> {
    this.UserContextVMCache$ =
      this.http.post<LoginResponse>(this.envService.apiUrl + Login_Token_Create, model)
        .pipe(
          map(uCtx => {
            this.userId = uCtx["user"]["user"]["employeeId"];
            this.userToken = uCtx["token"]
            sessionStorage.setItem('currentUser', JSON.stringify(uCtx["user"]));
            sessionStorage.setItem('currentToken', this.userToken);
            this.userContextVM = uCtx["user"];
            this.currentUserSubject = new BehaviorSubject<Employee>(JSON.parse(sessionStorage.getItem('currentUser')!));
            this.currentUserTokentSubject = new BehaviorSubject<string>(sessionStorage.getItem('currentToken')!);
            return true;
          }),
          catchError(err => {
            return of(false);
          })
        );

    return this.UserContextVMCache$;
  }

  public getCurrentUser() {
    return this.currentUserSubject.value;
  }

  public getCurrentToken() {
    return this.currentUserTokentSubject.value;
  }

  public handleAuthError(err?: any): Observable<any> {
    try {
      this.loader.stop();
    }
    catch (error) {
      console.error("Loader still not initiated,stopping it causes this exception!");
    }
    let errorMessage: string = "ERROR:" + err.status + " - " + err.message;
    throw err;

  }

  getUserRoleId() {
    var user = this.getCurrentUser();
    return user['role']['id'];
  }
  getUserId() {
    var user = this.getCurrentUser();
    return user['user']['employeeId'];
  }
  getUsername() {
    var user = this.getCurrentUser();
    return user['user']['username'];
  }
  getAllowMenu() {
    var user = this.getCurrentUser();
    return user['allowedMainMenuList'];
  }
  getRolePermissions() {
    var user = this.getCurrentUser();
    var allowUser=  user['allowedMainMenuList'].find((x: { menuName: string; }) => x.menuName == "Settings");
    var rolePerms = allowUser['subMenus'].find((x: { menuName: string; }) => x.menuName == "Roles");
    return rolePerms["menuPermissions"];
  }

  clearStorage() {
    sessionStorage.removeItem('currentToken');
    sessionStorage.removeItem('currentUser');
  }

  
}

