import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { Ipost } from './models/post';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit{
  title = 'jsoncrud';
  postArr : Ipost[] = [];
  constructor(private postService : PostService){}

  ngOnInit(): void {
    this.fetchAllPost();
  }

  fetchAllPost(){
    this.postService.fetchPosts()
    .subscribe({
      next : res => {
        console.log( res);
        this.postArr = res;
      },
      error : err => console.log(err)
      
    })
  }
}
