import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  productID: any;
  allQuestions : any;

  constructor(private service: ServicesService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParams();
    
    if(this.productID==null||this.productID.length==0||this.productID==""){
      this.getAllQuestions();
    }else{
      this.getQuestions();
    }

  }
  getParams() {
    this.router.params.subscribe(params => {
      this.productID = params.id;
    });
    console.log(this.productID);
  }

  getAllQuestions() {
    debugger
    this.service.getAllQuestions().subscribe((Response)=>{
      console.log(Response, "response for search ==>")
      this.allQuestions = Response;
    });
  }
  getQuestions() {
    debugger
    this.service.getQuestions(this.productID).subscribe((Response)=>{
      console.log(Response, "response for search ==>")
      this.allQuestions = Response;
    });
  }

}
