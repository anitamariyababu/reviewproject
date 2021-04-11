import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  user = {
    uname: '',
    password: ''
  }
  loginUser(){
    this._auth.userlogin(this.user).subscribe(status=>{
      if(status.message=="success"){
        this._router.navigate(['/add']);
      }
    })
  }
  constructor(private _auth: AuthService,
    private _router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
