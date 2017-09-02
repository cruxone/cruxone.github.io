import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class PostFetchService {
  private postsURL = "/assets/posts/posts.json"
  
  constructor(private http: Http) { 
    
  }
  getPosts () {
    return this.http.get("/assets/posts/posts.json")
      .map((response: Response) => response.json());
  }

}
