import { outputAst } from '@angular/compiler';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss'],
})
export class CaptchaComponent implements OnInit {
  mathFormGroup: FormGroup | undefined;
  @Output() valueChange = new EventEmitter();
    constructor(private formBuilder: FormBuilder) {
    this.setForm();
  }
  ngOnInit() {}
  randomNumber = (min = 1, max = 10) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  setForm() {
    this.mathFormGroup = this.formBuilder.group({
      firstNumber: [this.randomNumber(), [Validators.required]],
      secondNumber: [this.randomNumber(), [Validators.required]],
      answer: ['', [Validators.required]],
    });
  }
  validate() {
    if (this.mathFormGroup?.invalid) {
      return;
    }
    let result = this.answerValidator(this.mathFormGroup?.value);
    this.valueChange.emit(result);

  }


  answerValidator(form: { firstNumber: any; secondNumber: any; answer: any }) {
    const firstNumber = form.firstNumber,
      secondNumber = form.secondNumber,
      answer = form.answer;
     
    if (+answer === parseInt(firstNumber) + parseInt(secondNumber)) {
      return true;
      
    }
    return  false ;
  }
}
