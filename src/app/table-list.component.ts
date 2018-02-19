import { Component, OnInit, Injectable } from '@angular/core';
import { Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TServiceService } from './t-service.service';
@Component({
  selector: 'tableList-root',
  templateUrl: './table-list.html'
})
@Injectable()
export class TableListComponent implements OnInit {
  @Input() sName: string;
  @Input() dbName: string;
  @Input() name: string;
  @Input() passWord: string;
  tNames: string[]; tDet:string[];
  vNames: string[];
  spNames: string[];
  triggerNames: string[];
  functionNames: string[];
  message:string[];
  collapsed:boolean =false;
  collapsed1:boolean =false;
  collapsed2:boolean =false;
  collapsed3:boolean =false; collapsed4:boolean =false;
  constructor(private http: HttpClient, private data: TServiceService) {
    
  }
  
  
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    
    this.fetchTables(this.message[0],this.message[1],this.message[2],this.message[3]).subscribe((res)=>
    {this.tNames = res;});;
    this.fetchViews(this.message[0],this.message[1],this.message[2],this.message[3]).subscribe((res)=>
    {this.vNames = res;});;
    this.fetchSps(this.message[0],this.message[1],this.message[2],this.message[3]).subscribe((res)=>
    {this.spNames = res;});;
    this.fetchTriggers(this.message[0],this.message[1],this.message[2],this.message[3]).subscribe((res)=>
    {this.triggerNames = res;});;
    this.fetchFunctions(this.message[0],this.message[1],this.message[2],this.message[3]).subscribe((res)=>
    {this.functionNames = res;});;
    this.sName=this.message[0];
    this.dbName=this.message[1];
    this.name=this.message[2];
    this.passWord=this.message[3];
  }
  
  fetchTables(m:string, m1:string, m2:string, m3:string) {


      let data = { "serverName": m, "databaseName": m1, "userName": m2, "passWord": m3 };
      const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      let request = "{" + JSON.stringify(data).slice(1, -1) + "}";
      return this.http.post('http://localhost/UtilityBackEnd/api/Utility/GetTableList',
        request,
        headers
      ).map(response => {
        return response as string[]
      })
      
    }
    tDetails(tableName:string){
      this.tableDetails(tableName).subscribe((res)=>
    {this.tDet = res;alert("Model at "+this.tDet[0]+"\n"+"Stored Proc at "+this.tDet[1]+"\n"+"Api func at "+this.tDet[2])});;
    
    }
    fetchViews(m:string, m1:string, m2:string, m3:string) {


      let data = { "serverName": m, "databaseName": m1, "userName": m2, "passWord": m3 };
      const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      let request = "{" + JSON.stringify(data).slice(1, -1) + "}";
      return this.http.post('http://localhost/UtilityBackEnd/api/Utility/GetViews',
        request,
        headers
      ).map(response => {
        return response as string[]
      })
    }
    fetchSps(m:string, m1:string, m2:string, m3:string) {


      let data = { "serverName": m, "databaseName": m1, "userName": m2, "passWord": m3 };
      const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      let request = "{" + JSON.stringify(data).slice(1, -1) + "}";
      return this.http.post('http://localhost/UtilityBackEnd/api/Utility/Getsps',
        request,
        headers
      ).map(response => {
        return response as string[]
      })
    }
    fetchTriggers(m:string, m1:string, m2:string, m3:string) {


      let data = { "serverName": m, "databaseName": m1, "userName": m2, "passWord": m3 };
      const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      let request = "{" + JSON.stringify(data).slice(1, -1) + "}";
      return this.http.post('http://localhost/UtilityBackEnd/api/Utility/GetTriggers',
        request,
        headers
      ).map(response => {
        return response as string[]
      })
    }
    fetchFunctions(m:string, m1:string, m2:string, m3:string) {


      let data = { "serverName": m, "databaseName": m1, "userName": m2, "passWord": m3 };
      const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      let request = "{" + JSON.stringify(data).slice(1, -1) + "}";
      return this.http.post('http://localhost/UtilityBackEnd/api/Utility/GetFunctions',
        request,
        headers
      ).map(response => {
        return response as string[]
      })
    }
    generateCode(){
      
    };
    tableDetails(tableName:string){
      let data = { "serverName": this.sName, "databaseName": this.dbName, "userName": this.name, "passWord": this.passWord };
      const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      let request = "{" + JSON.stringify(data).slice(1, -1) + "}";
      let uri="http://localhost/utilitybackend/api/Utility/TableLinkClick/"+"?"+"tableName"+"="+tableName;
      return this.http.post(uri,
        request,
        headers
      ).map(response => {
        return response as string[]
      })
    };

  }

