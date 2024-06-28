import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  questionId: any;
  msg: any;
  comment = new Comment();

  constructor(private service: ServicesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParams();
  }

  getParams() {
    this.route.params.subscribe(params => {
      this.questionId = params.id;
    });
    console.log(this.questionId);
  }

  registerComment() {
    console.log(this.comment);
    console.log(this.questionId);

    this.service.registerComment(this.comment, this.questionId).subscribe(
      data => {
        console.log("Success!")

        this.router.navigate(['home']);

      },
      err => {
        console.log("Error!"),
          this.msg = "Please Check Input"
      })
  }
}