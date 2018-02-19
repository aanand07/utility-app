import { Component, Injectable } from '@angular/core';
import { parse } from 'querystring';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NgIf } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { TagContentType } from '@angular/compiler';
import { directive } from '@angular/core/src/render3/instructions';
import { loginpageComponent } from './login-page/login-page.component';
import { TableListComponent } from './table-list.component';
//import {SecondPageComponent} from './second-page/second-page.component';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
   
})
@Injectable()
export class AppComponent {
   

    
    }

    

