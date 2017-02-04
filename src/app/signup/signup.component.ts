import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { CookieService } from 'angular2-cookie/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {};

  constructor(
      private userService: UserService,
      private cookieService: CookieService,
      private router: Router
    ) {
  }

  ngOnInit() {
  }

  signup(){
    this.userService.signup(this.user).subscribe(
      (data) => {
        console.log(data);

        if(data.success){
          let user = data.user;
          this.cookieService.put("userId", user.id);
          this.cookieService.put("userName", user.name);
          this.cookieService.put("userEmail", user.email);
          // this.location.replaceState('/');
          // this.router.navigate(['/']);
          window.location.href = "/";
        }else {
          console.log("Error signup", data);
        }
      }
    );
  }

}
