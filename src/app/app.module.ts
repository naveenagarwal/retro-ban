import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { BoardComponent } from './board/board.component';
import { HomeComponent } from './home/home.component';

import { BoardService } from './services/board.service';
import { UserService } from './services/user.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

// This is imported beacuse map fucntion was ot available on observable response from API.
import 'rxjs/Rx';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
    { path: 'board/:id', component: BoardComponent },
    { path: 'board', component: BoardComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BoardService,
    UserService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
