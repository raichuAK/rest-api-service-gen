var fileSys = require('fs');
var http = require("http");
var https = require("https");



var content = '';

function createFileWithContents(fileName, content){


    fileSys.readFile('input.hsf', 'utf8', function (err,data) {



         if (err) {
           return console.log(err);
         }else{
             console.log(data);
        var inputArgs = data.split("#");

            var jsonVal = '';

var fileNameConstant = '.service.ts';

    
var cookieString = 'JSESSIONID=66BCA97F1223FDECBA53E34089051F4A; EEUSERNAME=hemant%40webintensive.com; SPRING_SECURITY_REMEMBER_ME_COOKIE=NDJqYUpWNmJ2RHkxTFVuc1hkZXY1Zz09Olc4ZzgybzNYRUtHZVVLMjA5ZDRZTkE9PQ';
    var options = {
        host: inputArgs[0], 
        port : inputArgs[1],
        path: inputArgs[4],
        method: inputArgs[5],
         json:true,
        headers: {
            'Content-Type': 'application/json',
            'Cookie': inputArgs[7]
        }
    };

    var extFileName = inputArgs[2];

var fileName = extFileName.concat(fileNameConstant);
var methName = inputArgs[3];

     var req = http.get(options, function(res) {
         var output = '';
         res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log("chunk "+chunk);
            output += chunk;
        });

        res.on('end', function() {
            console.log("output "+output+" res.statusCode, "+res.statusCode);
            var obj = '';
            try{
                if(output.length==0)
                    console.log("output is blank ");
                else
                    obj = JSON.parse(output);
            }catch(ex){
                console.error("error in parse "+ex);
            }
            jsonVal = obj;
          //  setTimeout(function () {
           // var url111 = "http://localhost:3333/rest/api/activities/176366.json?basicInfo=false";
                    /*var pathArray = options.path.split("/");
                    var lastPart = pathArray[pathArray.length-1];
                    var resp = {"ok" : "1", "info" : "abc"};
                    var methName = lastPart.replace(/[^a-zA-Z0-9_-]/g,'');*/
                    
                   // console.log("methName "+methName);
                    content = "import { Injectable }     from '@angular/core'; \n"+
                    "import { Http, Response, Headers, RequestOptions } from '@angular/http'\n"+
                    "import {Observable} from 'rxjs/Rx';\n"+"\n \n"+
                    "import 'rxjs/add/operator/map'; \n"+
                    "import 'rxjs/add/operator/catch';"+
                    "\n  \n \n"+
                    "@Injectable \n"+
                    "export class "+extFileName+" { \n"+
                    "\n"+
                    "   constructor (private http: Http) {} \n \n \n"+ 
                    "   var retJson = "+JSON.stringify(jsonVal, null, 4)+"  \n \n \n"+
                    "   "+methName+"() : new Observable(observer => {  \n "+
                    "        observer.next(retJson);"+
                    "\n  "+
                    "   }); " ;
                  //  console.log("fileName "+fileName+" extFileName "+extFileName+" fileNameConstant "+fileNameConstant);
                  
                    fileSys.writeFile(fileName, content, function(err) {

                            if(err) {
                                return console.log(err);
                            }
                            console.log("The file was saved!");
                        }); 
            //}, 20000);

        });
     });
    }
  });
}

createFileWithContents();