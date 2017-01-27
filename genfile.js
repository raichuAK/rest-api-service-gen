var fileSys = require('fs');
var http = require("http");
var https = require("https");



var content = '';

function createFileWithContents(fileName, content){

var fileNameConstant = '.service.ts';
var extFileName = 'Some';

var fileName = extFileName.concat(fileNameConstant);
    var jsonVal = '';
    
var cookieString = 'SPRING_SECURITY_REMEMBER_ME_COOKIE=RDJ2V3lKekttMlVydGZIRHpnRDhPQT09Oks1Y1pZOVV2bSsvd0dKb2NQaGdDeWc9PQ; expires=' + new Date(new Date().getTime() + 86409000);
    var options = {
        host: 'localhost', 
        port : 8080,
        path: '/rest/api/public/messages',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': cookieString,
        }
    };
     var req = http.get(options, function(res) {
         var output = '';
         res.setEncoding('utf8');
        res.on('data', function (chunk) {
           // console.log("chunk "+chunk);
            output += chunk;
        });

        res.on('end', function() {
            //console.log("output "+output);
            var obj = JSON.parse(output);
            jsonVal = obj;
            
            var url = "http://localhost:3333/rest/api/activities/176366.json?basicInfo=false";
                    var pathArray = url.split("/");
                    var lastPart = pathArray[pathArray.length-1];
                    var resp = {"ok" : "1", "info" : "abc"};
                    var methName = lastPart.replace(/[^a-zA-Z0-9_-]/g,'');
                    console.log("methName "+methName);
                    content = "import { Injectable }     from '@angular/core'; \n"+
                    "import { Http, Response, Headers, RequestOptions } from '@angular/http'\n"+
                    "import {Observable} from 'rxjs/Rx';\n"+"\n \n"+
                    "import 'rxjs/add/operator/map'; \n"+
                    "import 'rxjs/add/operator/catch';"+
                    "\n  \n \n "+
                    "@Injectable \n"+
                    "export class "+extFileName+" { \n"+
                    "\n"+
                    "constructor (private http: Http) {} \n \n \n"+ 
                    " \n \n var retJson = "+JSON.stringify(jsonVal, null, 4)+"  \n \n \n"+
                    " "+methName+"() : new Observable(observer => {  \n "+
                    "        observer.next(retJson);"+
                    "\n  "+
                    "   }); " ;
                    console.log("fileName "+fileName+" extFileName "+extFileName+" fileNameConstant "+fileNameConstant);
                    
                    fileSys.writeFile(fileName, content, function(err) {

                            if(err) {
                                return console.log(err);
                            }
                            console.log("The file was saved!");
                        }); 


        });
     });

    

}

createFileWithContents();