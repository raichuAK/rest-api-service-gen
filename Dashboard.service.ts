import { Injectable }     from '@angular/core'; 
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {Observable} from 'rxjs/Rx';

 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
  
 
@Injectable 
export class Dashboard { 

   constructor (private http: Http) {} 
 
 
   var retJson = ""  
 
 
   getcount() : new Observable(observer => {  
         observer.next(retJson);
     }); 