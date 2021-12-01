import {Component, OnInit} from '@angular/core';
import {IBlogResponse} from './Interfaces/blog.interface';
import {BlogService} from "../shared/services/blog/blog.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  // Завдання
  //
  // Потрібно реалізувати функціонал як на відео AngularBlog, а саме:
  //   1.	Самі блоги та зареєстровані користувачі мають зберігатися на сервісі, тобто в
  //   масивах blogs та users
  // 2.	Блог це об’єкт в якому є наступні властивості: id, postedBy, topic, date, message
  // 3.	Юзер це об’єкт в якому є наступні властивості: id, username, email, password
  // 4.	Юзерів можна реєструвати тільки з унікальними username та email
  // 5.	Юзер може добавляти, видаляти та редагувати свій пост
  // 6.	Адмін може добавляти, видаляти та редагувати свій пост та чужі пости
  // 7.	Пост не має добавлятися з пустими полями

  public adminPosts: Array<IBlogResponse> = [];
  public currentPost!: IBlogResponse;
  public currentPostID!: number;


  public userPosts: Array<IBlogResponse> = [];

  isClickSignIn: boolean = false;
  isClickSignUp: boolean = false;
  isClickEdit: boolean = false;
  isClickAdd: boolean = false;
  public message = "";
  public topic = "";


  constructor(private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.userPosts = this.blogService.getPosts();
  }

  modalAddCreate(): void {
    this.isClickAdd = !this.isClickAdd
  }

  modalEditCreate(): void {
    this.isClickEdit = !this.isClickEdit;
  }

  modalSignInCreate(): void {
    this.isClickSignIn = !this.isClickSignIn;
  }

  modalSignUpCreate(): void {
    this.isClickSignUp = !this.isClickSignUp;
  }

  savePost(): void {
    const post: IBlogResponse = {
      id: this.currentPostID,
      postedBy: "admin",
      topic: this.topic,
      date: new Date().getDate(),
      message: this.message,
    }
    this.blogService.addPost(post)
  }

  deletePost(): void {
    this.blogService.deletePost(this.currentPostID)
    console.log(this.currentPostID)
  }


}
