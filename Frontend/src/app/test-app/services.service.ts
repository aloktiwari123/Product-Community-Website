import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from './models/comment';
import { Question } from './models/question';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {

  isLoggedIn = false;

  constructor(private http: HttpClient) { }

  // Some Functions which we used in this application at different files
  //loginUser
  public loginUserToken(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  //is login or not
  public isLogIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  //logout
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    return true;
  }

  sProducts(products: any) {
    localStorage.setItem('products', JSON.stringify(products));
  }

  //get Token
  public getToken() {
    return localStorage.getItem('token');
  }

  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    }
    this.logout();
    return null;
  }

  //get User role
  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  // All the API Services

  //generate token
  public generateToken(loginData: any) {
    return this.http.post<any>(
      'http://localhost:3000/generate-token',
      loginData
    );
  }

  //current User
  public getCurrentUser() {
    return this.http.get('http://localhost:3000/current-user');
  }

  //register User
  public registerUser(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:3000/user/register', user);
  }

  //creating a question
  registerQuestion(question: Question): Observable<any> {
    return this.http.post<any>('http://localhost:3000/question', question);
  }
  //get All Questions
  public getAllQuestions() {
    debugger
    return this.http.get('http://localhost:3000/questions');
  }

  registerComment(comment: Comment, questionId:any): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/question/${questionId}/comments`, comment);
  }

  getAllComments(questionId:any): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/question/${questionId}/comments`);
  }

  getQuestions(productID:any): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/question/${productID}`);
  }

}
