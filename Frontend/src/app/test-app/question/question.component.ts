import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  msg: any;
  questions = [];
  question = new Question();
  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
  }

  registerQuestion(){

    console.log(this.question);

    this.service.registerQuestion(this.question).subscribe(
      data => {console.log("Success!")

      this.router.navigate(['home']);
      },
      err => {console.log("Error!"),
       this.msg = "Please Check Input"})
      {
        
      }
  }

}
