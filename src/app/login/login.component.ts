import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }

  validatorBool(field: string) {
    if (this.loginForm.get(field).invalid && this.loginForm.get(field).touched) {
      return true;
    } else {
      return false;
    }
  }

  validatorSubmitBool(username: string, password: string) {
    if (this.loginForm.get(username).invalid || this.loginForm.get(password).invalid || this.loginForm.get(username).untouched || this.loginForm.get(username).untouched) {
      return true;
    } else {
      return false;
    }
  }
}

