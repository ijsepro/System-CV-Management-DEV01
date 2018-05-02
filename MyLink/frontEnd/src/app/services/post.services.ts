import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class PostService {

  /** url
   * path of your php server that needs to connects with angular

      */

  private url='http://localhost/play/backEnd';

  constructor(private http: Http) {

  }

    registerAdmin(formdata) {
        return this.http.post(this.url, formdata);
    }

  createPost(post){
    return this.http.post(this.url,JSON.stringify(post))
  }

}
