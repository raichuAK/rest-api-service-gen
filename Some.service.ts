import { Injectable }     from '@angular/core'; 
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {Observable} from 'rxjs/Rx';

 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
  
 
 @Injectable 
export class Some { 

constructor (private http: Http) {} 
 
 
 
 
 var retJson = {
    "messages": {
        "info.ADD_GUIDE": "The Guide has been added to the list of Favorite Guides.",
        "error.REMOVE_GUIDE": "Are you sure you want to remove this Guide from your list of favorites?",
        "error.input.SELECT_GUIDE": "Please select a Guide.",
        "info.REMOVE_GUIDE": "The Guide has been removed from the list of Favorite Guides."
    }
}  
 
 
 176366jsonbasicInfofalse() : new Observable(observer => {  
         observer.next(retJson);
     }); 