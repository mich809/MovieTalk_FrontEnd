import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import {httpCalls} from "../../Services/httpCalls.service"
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit  {
  user = new User('','')
  confirmPassword : string = ''
  test : any 

  constructor(private httpcaller : httpCalls) { }

  ngOnInit(): void{   
  }
  registerUser(){
        if (this.confirmPassword != this.user.password){
          console.log('password does not match')
        }
        else{
          this.httpcaller.registerUser(this.user).subscribe(data =>{
            if(data === true){
              console.log('hell yeah')
            }
          },(err)=>{
            console.log("unable to add user")
          });
          
        }
  }
  

}

