import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/App-services/LoaderService/loader.service';
import { UserService } from 'src/app/App-services/UserService/user.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  contactForm: any;
  submitted = false;
  error: any;
  isHumman: Boolean = false;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private loaderService: LoaderService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.setForm();
  }
  setForm() {
    this.contactForm = this.formBuilder.group({
      id: [0],
      fullName: ['', [Validators.required, Validators.maxLength(100)]],
      Subject: ['', [Validators.required, Validators.maxLength(200)]],
      body: ['', [Validators.required, Validators.maxLength(500)]],
      emailAddress: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(100)],
      ],
      mobileNo: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern(/^[0-9]+$/),
        ],
      ],
    });
  }

  get f() {
    return this.contactForm.controls;
  }
  save() {
    debugger
    if(!this.isHumman){
      return;
    }
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    this.loaderService.start();
    this.userService
      .save_ContactUs(this.contactForm.value)
      .subscribe((success) => {
        this.loaderService.stop();
        if (success) {
          this.router.navigate(['./']);
          this.setForm();
        } else {
        }
      });
  }
  captchaResult(response: Boolean) {
    debugger
      this.isHumman = response;
  }
}
