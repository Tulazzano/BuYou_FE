import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/util/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  BEres: string;
  user: object;
  roles = ['CUSTOMER', 'SELLER'];

  registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    roleType: ['', Validators.required]
  });



  constructor(private formBuilder: FormBuilder,
    private userservice: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
  }


  onSubmit(): void {
    console.log(this.registerForm);
    console.log(this.registerForm.value);
    this.register();
    this.registerForm.reset();
    this.router.navigateByUrl('');
  }

  register() {
    this.userservice.userAdd(this.registerForm.value).subscribe(
      data => this.BEres = data
    );
  }

  all() {
    this.userservice.getAllUser().subscribe(
      data => this.user = data
    );
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

  validatorSubmitBool(firstName: string, lastName: string, email: string, username: string, password: string, role) {
    if (this.validatorSubmitConditionBool(firstName) || this.validatorSubmitConditionBool(lastName) || this.validatorSubmitConditionBool(email) || this.validatorSubmitConditionBool(username) || this.validatorSubmitConditionBool(password) || this.validatorSubmitConditionBool(role)) {
      return true;
    } else {
      return false;
    }
  }
}
