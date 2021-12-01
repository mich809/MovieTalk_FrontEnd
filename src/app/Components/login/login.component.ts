import { Component } from '@angular/core';
import { User } from 'src/app/Models/user';
import {httpCalls} from "../../Services/httpCalls.service"
import {Router} from "@angular/router"
import { FormBuilder, Validators ,FormControl} from '@angular/forms';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  { 
  username = new FormControl('', [Validators.required ]);
  password = new FormControl('', [Validators.required]);

  hide = true;

  loginForm = this.formBuilder.group({
    username: this.username,
    password: this.password
  });


 
   
  


  constructor(private httpcaller : httpCalls , private router : Router , private formBuilder: FormBuilder,) { }



    loginUser() : void{   
     let user = new User(this.loginForm.controls['username'].value,this.loginForm.controls['password'].value)   
     this.httpcaller.loginUser(user).subscribe(data => {        
         this.setSession(data.jwtToken)
        
     },error => {
        console.log('error')
     },()=>{
       this.router.navigateByUrl('/main/home')
     }
      )
  }

  
  private setSession(authResult : any) {       
    localStorage.setItem('token', authResult);
   
 
    
}  


   
      
  }   
       
       
       
   
 
  


 
  


