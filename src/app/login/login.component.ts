
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/util/session.service';

import { UserService } from 'src/util/user.service';
import { Iuser } from '../iuser';


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

  user: Iuser;
  username: string;
  password: string;
  users:Iuser[];

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userservice: UserService,
    private session:SessionService,
  ) { }

  ngOnInit() {
    
    
  }

  onSubmit(): void {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
    this.login();
    this.loginForm.reset();
    
  }


  login() {
    //Setto i parametri da inviare al DB
    let params = new HttpParams()
      .set('username', this.loginForm.value.username)
      .set('password', this.loginForm.value.password)
    //Effettuo la richiesta e salvo la risposta in this.user
    this.userservice.userLogin(params).subscribe(
      data => this.user = data);
    //Se la chiamata va a buon fine salvo l'user nella sessione
      if(this.user!=undefined){
        this.session.setActiveUser(this.user);
        this.router.navigateByUrl('home');
      }
  }

  goToRegister() {
    this.router.navigateByUrl('register')
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

