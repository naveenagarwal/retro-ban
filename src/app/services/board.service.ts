import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class BoardService {

  constructor(private http: Http) { }

  create(name, userId) {
    console.log("in create");
    let url = environment.api + '/board/' + name;
    console.log("url ", url);

    return this.http.post(url, { userId: userId } ).map(
        (res) => res.json()
      );
  }

  get(id) {
    console.log("fetching board with ", id);

    let url = environment.api + '/board/' + id;

    console.log("url ", url);

    return this.http.get(url).map(
        (res) => res.json()
      );
  }

  update(id, data){
    console.log("in create");
    let url = environment.api + '/board/' + id;
    console.log("url ", url);

    return this.http.patch(url, data ).map(
        (res) => res.json()
      );
  }

  addItem(item) {
    console.log("creating item for section ", item);

    let url = environment.api + '/item/';

    console.log("url ", url);

    return this.http.post(url, { item: JSON.stringify(item) } ).map(
        (res) => res.json()
      );
  }

  all(userId) {
    console.log("fetching all boards for a user ");

    let url = environment.api + '/board/list/' + userId;

    console.log("url ", url);

    return this.http.get(url).map(
        (res) => res.json()
      );
  }
}
