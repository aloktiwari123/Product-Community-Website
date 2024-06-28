import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestAppRoutingModule } from './test-app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import { authInterceptorProviders } from './auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionComponent } from './question/question.component';
import { SearchComponent } from './search/search.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { ViewCommentsComponent } from './view-comments/view-comments.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    QuestionComponent,
    SearchComponent,
    AddCommentComponent,
    ViewCommentsComponent
  ],
  imports: [
    CommonModule,
    TestAppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    NgbModule
  ],
  providers: [authInterceptorProviders]
})
export class TestAppModule { }
