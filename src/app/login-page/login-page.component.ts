import { Component, Injectable } from '@angular/core';
import { parse } from 'querystring';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { TagContentType } from '@angular/compiler';
import { TableListComponent } from '../table-list.component';
import { Router } from '@angular/router';

import { TServiceService } from '../t-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
@Injectable()
export class loginpageComponent {

    
    n1=[];
    res1:boolean;
    serverName:string;
    dbname:string;
    name:string;
    passWord : string;
     constructor(private http: HttpClient, private router: Router,private data: TServiceService) {
      
     }
   
     myFunc(serverName: HTMLInputElement["innerText"],dbname: HTMLInputElement["innerText"],
     name: HTMLInputElement["innerText"], passWord: HTMLInputElement["innerText"]) {
        this.n1.push(serverName);
        this.n1.push(dbname); this.n1.push(name); this.n1.push(passWord);
          this.fetchdataFunc(serverName, dbname, name, passWord).subscribe(result =>
             {this.res1=result; if(result){
              
             
            this.data.currentMessage.subscribe(n1 => {n1 = n1; });
            this.data.changeMessage(this.n1);
            
              console.log(this.n1);
              this.router.navigateByUrl('table-list');
          }
              else
              {
               alert("Invalid credentials");
              }
          }) ;
         
     }
     fetchdataFunc(serverName1: string, dbname1: string, name1: string, passWord1: string): Observable<boolean> {
         let data = { "serverName": serverName1, "databaseName": dbname1, "userName": name1, "passWord": passWord1 };
         const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
         let request = "{" + JSON.stringify(data).slice(1, -1) + "}";
 
         return this.http.post('http://localhost/utilitybackend/api/Utility/MatchDetails',
             request,
             headers
         ).map(response =>{return response as boolean})
             ;
 
     }
     
}
