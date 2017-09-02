import { Component, OnInit } from '@angular/core';
import { PostFetchService } from '../post-fetch.service';

@Component({
  providers: [PostFetchService],
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts;
  constructor(private postFetchService: PostFetchService) { 
  this.posts = [];
  }

  postSelected () {
    // this function will trigger when a post is selected.
  }

  ngOnInit() {
    this.postFetchService.getPosts()
      .subscribe(resPostData => this.posts = resPostData.posts)
  }
}
