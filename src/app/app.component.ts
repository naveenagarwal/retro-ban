import { Component } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Retro-ban!';
  loggedIn: boolean = false;
  user: any = {};

  constructor(
      private cookieService: CookieService,
      private userService: UserService
    ){

  }

  ngOnInit() {
    if(this.cookieService.get("userId") && this.cookieService.get("userName")){
      this.loggedIn = true;
      this.user = {
        name: this.cookieService.get("userName"),
        id: this.cookieService.get("userId"),
        email: this.cookieService.get("userEmail")
      };
    }else{
      this.loggedIn = false;
      this.user = {};
    }
  }

  logout() {
    this.cookieService.put("userId", null);
    this.cookieService.put("userName", null);
    this.cookieService.put("userEmail", null);
    window.location.href = "/";
  }
}
