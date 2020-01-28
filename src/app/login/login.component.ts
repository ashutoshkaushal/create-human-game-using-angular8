import { Component, OnInit,Output } from '@angular/core';
import {NgForm} from '@angular/forms';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg="";
  @Output()  status=new EventEmitter();
  isValid=false;
  constructor(){}
  ngOnInit() {
  }
  check(form:NgForm)
  {
      if(form.invalid)
      {
        console.log("Error");
        return;
      }
      else if(form.value.user==="God" && form.value.pass==="iamthegod")
      {
        console.log("Valid");
        this.isValid=true;
        this.status.emit(this.isValid);
        form.resetForm();
        this.msg="";
      }
      else{
        form.resetForm();
        this.msg="Username or Password Invalid";
      }
  }

}
