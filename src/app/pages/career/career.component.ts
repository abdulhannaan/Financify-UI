import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  constructor(private userService: UserService, private formBuilder: FormBuilder, private loaderService: LoaderService,
    private router: Router) { }
  ngOnInit(): void {
    this.setForm()
  }
  setForm() {
    this.joinForm = this.formBuilder.group({
      id: [0],
      fullName: ['', [Validators.required, Validators.maxLength(100)]],
      body: ['', [Validators.required, Validators.maxLength(500)]],
      emailAddress: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      mobileNo: ['', [Validators.required,Validators.maxLength(50), Validators.pattern(/^[0-9]+$/)]],
      fileName: ['', [Validators.required, Validators.maxLength(50)]],
      jobId: [0, [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
    }
    )
  }
  SetResponseData(response: any) {
    var response = response['body']['fileName'];
    this.joinForm.patchValue({ fileName: response });
  }

  get f() { return this.joinForm.controls; }
  save() {
    this.submitted = true;
    if (this.joinForm.invalid) {
      return;
    }
    this.loaderService.start();
    this.userService.save_JoinUs(this.joinForm.value).subscribe(
      success => {
        this.loaderService.stop();
        if (success) {
          this.router.navigate(['./']);
          this.setForm();

        }
        else {
        }
      },
    );
  }
}
