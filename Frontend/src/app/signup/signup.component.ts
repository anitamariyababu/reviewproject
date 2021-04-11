import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  user: UserModel = new UserModel("", "", "", "", "", 0, "", "");
  confirmpass = "";

  submit() {
    if (this.confirmpass == this.user.password) {
      this.authService.adduser(this.user).subscribe(status => {
        if (status.message == "success") {
          this.router.navigate(['/login'])
        }
      })
    }

  }

  ngOnInit(): void {
  }

}
