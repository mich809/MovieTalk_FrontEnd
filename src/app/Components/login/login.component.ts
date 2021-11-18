import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userModel = new User('','')
  confirmPassword : string = ''
  
  

  constructor() { }

  ngOnInit(): void {
  }

  loginUser(){

  }

}
