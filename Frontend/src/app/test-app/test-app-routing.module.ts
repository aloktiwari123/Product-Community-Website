import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { ViewCommentsComponent } from './view-comments/view-comments.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'question',
    component: QuestionComponent
  },
  {
    path: 'search/:id',
    component: SearchComponent
  },
  {
    path: 'addcomment/:id',
    component: AddCommentComponent
  },
  {
    path: 'viewcomments/:id',
    component: ViewCommentsComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestAppRoutingModule { }
