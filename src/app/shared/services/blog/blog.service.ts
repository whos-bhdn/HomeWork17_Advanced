import { Injectable } from '@angular/core';
import {IBlogResponse} from 'src/app/blog/Interfaces/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  now: Date = new Date();


  public blogs: Array<IBlogResponse> = [
    {
      id: 1,
      postedBy: "admin",
      topic: "First Post",
      date: this.now.getUTCHours(),
      message: "Sign Up to create your account and start to use Angular Blog"
    },
    {
      id: 2,
      postedBy: "admin",
      topic: "Second Post",
      date: this.now.getUTCHours(),
      message: "Sign Up to create your account and start to use Angular Blog"
    }
  ]

  constructor() { }

  getPosts(): Array<IBlogResponse> {
    return this.blogs;
  }

  addPost(post: IBlogResponse): void{
    this.blogs.push(post);
    console.log(this.blogs)
  }

  updatePost(post: IBlogResponse, id: number): void{
    const index = this.blogs.findIndex(post => post.id === id);
    this.blogs.splice(index, 1, post)
  }

  deletePost(id: number): void{
    const index = this.blogs.findIndex(post => post.id === id);
    this.blogs.splice(index, 1)
  }
}
