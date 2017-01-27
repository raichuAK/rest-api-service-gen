import { Injectable }     from '@angular/core'; 
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {Observable} from 'rxjs/Rx';

 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
  
 
 @Injectable 
export class Some { 

constructor (private http: Http) {} 
 176366jsonbasicInfofalse() : Observable<Comment[]> {  
         return this.http.get(this.commentsUrl)   
                         .map((res:Response) => res.json())  
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
 
       
  }  var retJson = ""