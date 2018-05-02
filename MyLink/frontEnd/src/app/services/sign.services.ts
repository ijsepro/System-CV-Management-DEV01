import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class SignService {

  /** url
   * path of your php server that needs to connects with angular

      */

  private url = 'http://localhost/play/backEnd/index.php/Register/insert/';

  constructor(private http: Http) {

  }

  registerUser(formdata) {
    return this.http.post(this.url, formdata);
  }
  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
  }

}
