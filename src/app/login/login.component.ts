import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/App-model/login.model';
import { AuthService } from 'src/app/App-services/AuthService/auth.service';
import { LoaderService } from 'src/app/App-services/LoaderService/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public loginModel:LoginModel = new LoginModel();
  public errorMessage ="";
  constructor(private authService : AuthService , private router : Router , private loaderService:LoaderService) { 

  }

 ngOnInit() {

  }

 login(){
   this.loaderService.start();
  this.authService.login(this.loginModel).subscribe(
    response=>{
      this.loaderService.stop();
      if(response){
         this.gotoDashboard();
      }
      else{
        this.errorMessage="Please enter Valid Username and Password.";
      }
    }
 );
 }

// gotoSignup(){
//   this.router.navigate(['/sign-up']);
// }

// gotoForgotPassword(){
//   this.router.navigate(['/forgot-passowrd']);
// }
gotoDashboard(){
this.router.navigate(['../dashboard/main']);
}
}
