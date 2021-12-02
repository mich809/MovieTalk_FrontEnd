import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import {httpCalls} from "../../Services/httpCalls.service"
import { FormBuilder, Validators ,FormControl} from '@angular/forms';
import {passwordMatchValidator} from '../../Services/passwordMatchValidator'
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit  {
  
   username = new FormControl('', [Validators.required,Validators.minLength(4)]);
   password = new FormControl('', [Validators.required,Validators.minLength(8)]);
   confirmPassword = new FormControl('', [Validators.required,Validators.minLength(8) ]);

  hide = true;

 
  registrationForm = this.formBuilder.group({
    username: this.username,
    password: this.password,
    confirmPassword : this.confirmPassword
  });
  




  constructor(private httpcaller : httpCalls ,private formBuilder: FormBuilder) { }

  ngOnInit(): void{   
  }
  registerUser(){
        if (this.registrationForm.controls['password'].value != this.registrationForm.controls['confirmPassword'].value){
          console.log('password does not match')
         
        }else{  
          let user = new User(this.registrationForm.controls['username'].value,this.registrationForm.controls['password'].value)  
          this.httpcaller.registerUser(user).subscribe(data =>{
              console.log(typeof(data))

          })
        }
        
       
        
          
          
        
  }
  

}

