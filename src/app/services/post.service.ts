import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { environment } from 'src/environments/environment';
import { Ipost } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseURL : string = `${environment.url}/posts`

  constructor(private http : HttpClient) { }

  fetchPosts() : Observable<Ipost[]>{
    return this.http.get<Ipost[]>(this.baseURL);
  }

  createPost(post : Ipost) : Observable<Ipost> {
    return this.http.post<Ipost>(this.baseURL, post)
  }

  updatePost(post : Ipost) : Observable<Ipost>{
    let updateurl : string = `${this.baseURL}/${post.id}`
    return this.http.patch<Ipost>(updateurl, post)
  }

  removePost(id : number): Observable<null>{
    let removeurl : string = `${this.baseURL}/id`
    return this.http.delete<null>(removeurl)
  }
}
