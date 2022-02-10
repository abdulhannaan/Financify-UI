import { Component, OnInit } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators,FormGroup, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/App-services/LoaderService/loader.service';
import { UserService } from 'src/app/App-services/UserService/user.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  joinForm: any;
  submitted = false;
  error: any;
  isHumman: Boolean = false;


  constructor(private userService: UserService, private formBuilder: FormBuilder, private loaderService: LoaderService,
    private router: Router) {
      
     }
  ngOnInit(): void {
    this.setForm()
  }
  setForm() {
    this.joinForm = this.formBuilder.group({
      id: [0],
      fullName: ['', [Validators.required, Validators.maxLength(100)]],
      body: ['', [Validators.required]],
      emailAddress: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      mobileNo: ['', [Validators.required,Validators.maxLength(50), Validators.pattern(/^[0-9]+$/)]],
      fileName: ['', [Validators.required, Validators.maxLength(50)]],
      jobId: [0, [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
      coverFileName: [''],
      coverText: ['',[Validators.required]],
    });
    
    
  }
  SetResponseCV(response: any) {
    var response = response['body']['fileName'];
    this.joinForm.patchValue({ fileName: response });
  }

  SetResponseCover(response: any) {
    var response = response['body']['fileName'];
    this.joinForm.patchValue({ coverFileName: response });
  }

  get f() { return this.joinForm.controls; }
  save() {
    if(!this.isHumman){
      return;
    }
  
    
    this.submitted = true;
    
    if (this.joinForm.invalid) {
      return;
    }
    if(!this.validator() ){
      this.joinForm.coverText.validator.required;
      this.joinForm.coverFileName.validator.required;
    }
    this.loaderService.start();
    this.userService.save_JoinUs(this.joinForm.value).subscribe(
      success => {
        this.loaderService.stop();
        if (success) {
          this.router.navigate(['./']);
          this.setForm();
        }
      },
    );
  }
  captchaResult(response: Boolean) {

      this.isHumman = response;
  }

  validator(){
    if(this.joinForm.value.coverText || this.joinForm.value.coverFileName){
      return true;
    }
 
      return false;
  
    
  }
 
}




