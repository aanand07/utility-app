import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppComponents, AppRoutes } from "./app.routing";

import { TServiceService } from './t-service.service';

import { loginpageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    loginpageComponent,

    ...AppComponents
  ],
  imports: [
    BrowserModule, HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],


  providers: [TServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {

}












