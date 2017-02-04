import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  login(params) {
    console.log("login ", params);

    let url = environment.api + '/login/';

    console.log("url ", url);

    return this.http.post(url, { user: JSON.stringify(params) } ).map(
        (res) => res.json()
      );
  }

  signup(params) {
    console.log("signup ", params);

    let url = environment.api + '/signup/';

    console.log("url ", url);

    return this.http.post(url, { user: JSON.stringify(params) } ).map(
        (res) => res.json()
      );
  }

  getUser(params) {

  }

}
