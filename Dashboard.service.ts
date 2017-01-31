import { Injectable }     from '@angular/core'; 
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {Observable} from 'rxjs/Rx';

 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
  
 
@Injectable 
export class Dashboard { 

   constructor (private http: Http) {} 
 
 
   var retJsongetMyInfo = {
    "user": {
        "id": 65538,
        "email": "hemant@webintensive.com",
        "firstName": "hemantwebint",
        "lastName": "Nagpure",
        "blocked": false,
        "boss": {
            "id": 2,
            "email": "davidx@webintensive.com",
            "firstName": "DAVID",
            "lastName": "YAHOO",
            "blocked": false,
            "boss": {
                "id": 1
            },
            "title": "DAVID YAHOO",
            "fullName": "DAVID YAHOO"
        },
        "imageInfoId": 65538,
        "userTimeZone": {
            "id": 23,
            "name": "Asia/Calcutta",
            "displayName": "(UTC+05:30) New Delhi",
            "utcOffset": 0,
            "utcDstOffset": 0
        },
        "userLocale": {
            "id": 1,
            "name": "en_US",
            "description": "English (US)",
            "active": false,
            "createdAt": null
        },
        "title": "hemantwebint Nagpure",
        "fullName": "hemantwebint Nagpure"
    }
}  
 
 
   getMyInfo() : new Observable(observer => {  
         observer.next(retJsongetMyInfo);
     }); 
 
    var retJsongetGroups = {
    "groups": [
        {
            "id": 1,
            "numberOfMembers": 0,
            "name": "WebINTENSIVE"
        },
        {
            "id": 2,
            "numberOfMembers": 0,
            "name": "BELZABAR"
        },
        {
            "id": 65536,
            "numberOfMembers": 0,
            "name": "HIDE STEP GRANDPARENT"
        },
        {
            "id": 65539,
            "numberOfMembers": 0,
            "name": "UI ISSUE GROUP"
        },
        {
            "id": 65540,
            "numberOfMembers": 0,
            "name": "Group test"
        },
        {
            "id": 65542,
            "numberOfMembers": 0,
            "name": "65542-----------------------TEST---GROUP00000"
        },
        {
            "id": 65543,
            "numberOfMembers": 0,
            "name": "Test Group 3"
        },
        {
            "id": 65544,
            "numberOfMembers": 0,
            "name": "Test Group 4"
        },
        {
            "id": 65545,
            "numberOfMembers": 0,
            "name": "Test Group 5"
        },
        {
            "id": 65546,
            "numberOfMembers": 0,
            "name": "ADD ATTACHMENTS GROUP"
        },
        {
            "id": 65555,
            "numberOfMembers": 0,
            "name": "SHOW ME HOW FEATURE GROUP"
        },
        {
            "id": 65556,
            "numberOfMembers": 0,
            "name": "This group is a group with verry biig name---please dont mind it"
        },
        {
            "id": 65558,
            "numberOfMembers": 0,
            "name": "GUIDE ME FEATURE GROUP"
        },
        {
            "id": 65559,
            "parentGroupId": 65536,
            "numberOfMembers": 0,
            "name": "HIDE STEP PARENT"
        },
        {
            "id": 65560,
            "parentGroupId": 65559,
            "numberOfMembers": 0,
            "name": "HIDE STEP CHILD"
        },
        {
            "id": 65561,
            "parentGroupId": 65560,
            "numberOfMembers": 0,
            "name": "SMALLEST CHILD"
        },
        {
            "id": 65562,
            "parentGroupId": 65583,
            "numberOfMembers": 0,
            "name": "The SUBGROUP"
        },
        {
            "id": 65563,
            "parentGroupId": 65561,
            "numberOfMembers": 0,
            "name": "Test Group 1-subgroup"
        },
        {
            "id": 65564,
            "parentGroupId": 65542,
            "numberOfMembers": 0,
            "name": "Test Subgroup2"
        },
        {
            "id": 65565,
            "parentGroupId": 1,
            "numberOfMembers": 0,
            "name": "CUSTOM OPTIONS GROUP"
        },
        {
            "id": 65567,
            "parentGroupId": 65543,
            "numberOfMembers": 0,
            "name": "Hemant's subgroup"
        },
        {
            "id": 65568,
            "parentGroupId": 65544,
            "numberOfMembers": 0,
            "name": "Hemant's subgroup"
        },
        {
            "id": 65569,
            "parentGroupId": 65545,
            "numberOfMembers": 0,
            "name": "Hemant's subgroup"
        },
        {
            "id": 65570,
            "parentGroupId": 65563,
            "numberOfMembers": 0,
            "name": "YEH KAIKA NAHI ADD HO RAHA H'AI"
        },
        {
            "id": 65571,
            "numberOfMembers": 0,
            "name": "TEST-DB-GROUP"
        },
        {
            "id": 65573,
            "numberOfMembers": 0,
            "name": "The Permissions Group"
        },
        {
            "id": 65574,
            "parentGroupId": 65542,
            "numberOfMembers": 0,
            "name": "fghfghfghfg"
        },
        {
            "id": 65575,
            "parentGroupId": 65561,
            "numberOfMembers": 0,
            "name": "SMALLEST CHILD's CHILD"
        },
        {
            "id": 65576,
            "parentGroupId": 65575,
            "numberOfMembers": 0,
            "name": "SMALLEST OF SMALLEST CHILD"
        },
        {
            "id": 65578,
            "parentGroupId": 2,
            "numberOfMembers": 0,
            "name": "NEW GRP TO TEST DB"
        },
        {
            "id": 65579,
            "parentGroupId": 2,
            "numberOfMembers": 0,
            "name": "Belzabar"
        },
        {
            "id": 65580,
            "parentGroupId": 65559,
            "numberOfMembers": 0,
            "name": "fgfdg"
        },
        {
            "id": 65581,
            "parentGroupId": 2,
            "numberOfMembers": 0,
            "name": "LAST HEMANT GROUP"
        },
        {
            "id": 65582,
            "numberOfMembers": 0,
            "name": "ANGULAR GROUP"
        },
        {
            "id": 65583,
            "parentGroupId": 65582,
            "numberOfMembers": 0,
            "name": "Angular SUB GROUP"
        }
    ],
    "count": 35
}  
 
 
   getGroups() : new Observable(observer => {  
         observer.next(retJsongetGroups);
     }); 
 
  }