import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/Models/user';
import {httpCalls} from "../../Services/httpCalls.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user = new User('','')    
 
   
  

  constructor(private httpcaller : httpCalls) { }

  ngOnInit(): void {
  }

  loginUser(){  
        this.httpcaller.loginUser(this.user).subscribe(data=>{ 
             
        console.log(data.jwtToken)
        
      })
  }

 
 
  }


