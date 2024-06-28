import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrls: ['./view-comments.component.css']
})
export class ViewCommentsComponent implements OnInit {

  id: any;
  allComments :any;
  constructor(private service: ServicesService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParams();
    this.getAllComments();
  }

  getParams() {
    this.router.params.subscribe(params => {
      this.id = params.id;
    });
    console.log(this.id);
  }

  getAllComments() {
    debugger
    this.service.getAllComments(this.id).subscribe((Response)=>{
      console.log(Response, "response for comment search ==>")
      this.allComments = Response;
    });
  }

}
