import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchQuery: any;
  products: any;
  stats: any
  constructor(private service: ServicesService, private router: Router) { }
  ngOnInit(): void {
    this.showStats();
  }

  showStats() {
    
  }

  addReview(pId: any) {

    localStorage.setItem("reviewProductId", pId);
    this.router.navigate(['addReview']);
  }
  showReview(pId: any) {

    localStorage.setItem("reviewProductId", pId);
    this.router.navigate(['showReview']);
  }

  loggedIn() {
    return this.service.isLogIn();
  }

  logout() {
    this.service.logout();
    this.router.navigate(['login']);
  }

  currentUser() {
    return this.service.getUser();
  }

  removeFilter() {
    localStorage.removeItem("products");
  }

  search() {
    const inputElement = <HTMLInputElement> document.getElementById("search");
    var userInput = inputElement.value;
    console.log(userInput);
    this.router.navigate(['search',userInput]);
  }

}


