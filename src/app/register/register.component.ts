import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.formBuilder.group({
    nome: ['', Validators.required],
    cognome: ['', Validators.required],
    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    userType: ['', Validators.required]
  });

  types : string[] = ['Buyer','Seller'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }


  onSubmit(): void {
    console.log(this.registerForm);
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }

  validatorBool(field: string) {
    if (this.registerForm.get(field).invalid && this.registerForm.get(field).touched) {
      return true;
    } else {
      return false;
    }
  }

  validatorSubmitConditionBool(field: string) {
    if (this.registerForm.get(field).invalid || this.registerForm.get(field).untouched) {
      return true;
    } else {
      return false;
    }
  }
  
  validatorSubmitBool(nome:string,cognome:string,email:string,username: string, password: string,type) {
    if (this.validatorSubmitConditionBool(nome)||this.validatorSubmitConditionBool(cognome)||this.validatorSubmitConditionBool(email)||this.validatorSubmitConditionBool(username)||this.validatorSubmitConditionBool(password)||this.validatorSubmitConditionBool(type)){
      return true;
    } else {
      return false;
    }
  }
}
