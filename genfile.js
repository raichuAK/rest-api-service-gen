var fileSys = require('fs');
var http = require("http");
var readline = require('readline');
var eventsInstance = require('events');
var querystring = require('querystring');
var eventEmitter = new eventsInstance.EventEmitter();

function createFileWithContents(fileName, content) {
   var content = ''; var head = ''; var body = ''; var tail = ''; var fileName = '';
 var isInputdataFromFileOver = false;
    var lineReader = readline.createInterface({
        input: fileSys.createReadStream('input.hsf')
    });

    lineReader.on('line', function (line) {
        console.log('Line from file:'); 
        head = "import { Injectable }     from '@angular/core'; \n" +
            "import { Http, Response, Headers, RequestOptions } from '@angular/http'\n" +
            "import {Observable} from 'rxjs/Rx';\n" + "\n \n" +
            "import 'rxjs/add/operator/map'; \n" +
            "import 'rxjs/add/operator/catch';" +
            "\n  \n \n" +
            "@Injectable \n" +
            "export class " + extFileName + " { \n" +
            "\n" +
            "   constructor (private http: Http) {} \n \n \n";

        tail = " }";
        var inputArgs = line.split("#"); var jsonVal = ''; var fileNameConstant = '.service.ts';


        var extFileName = inputArgs[2];

        fileName = extFileName.concat(fileNameConstant);
        var methName = inputArgs[3];

        var options = {
            host: inputArgs[0],
            port: inputArgs[1],
            path: inputArgs[4],
            method: inputArgs[5],
            json: true,
            headers: {
                'Content-Type': 'application/json',
                'Cookie': inputArgs[7]
            }
        };
       
        console.log("inputArgs[5] "+inputArgs[5]);
        if (inputArgs[5] == 'GET') {
 console.log("true is happening[5] "+inputArgs[5]);
            var req = http.get(options, function (res) {
                var output = '';
                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    output += chunk;
                });

                res.on('end', function (result, callback) {
                    console.log("res.statusCode, " + res.statusCode+" isInputdataFromFileOver "+isInputdataFromFileOver);
                    var obj = '';
                    try {
                        if (output.length == 0)
                            console.log("output is blank ");
                        else
                            obj = JSON.parse(output);
                    } catch (ex) {
                        console.error("error in parse " + ex);
                    }
                    jsonVal = obj;

                    var retJsonVarName = 'retJson' + methName;
                    body += "   var " + retJsonVarName + " = " + JSON.stringify(jsonVal) + "  \n \n \n" +
                        "   " + methName + "() : new Observable(observer => {  \n " +
                        "        observer.next(" + retJsonVarName + ");" +
                        "\n  " +
                        "   }); \n \n ";
                    if (isInputdataFromFileOver) {
                        eventEmitter.emit('data_received');
                    }

                });
            });
        } else if (inputArgs[5] == 'POST') {
            var data = inputArgs[6];
            options = {
                host: inputArgs[0],
                port: inputArgs[1],
                path: inputArgs[4],
                method: inputArgs[5],
                json: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': Buffer.byteLength(data),
                    'Cookie': inputArgs[7]
                }
            };

            var req = http.request(options, function (res) {
                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    console.log("body: " + chunk);
                });
            });

            req.write(data);
             res.on('end', function (result, callback) {
                   // console.log("output " + output + " res.statusCode, " + res.statusCode);
                    var obj = '';
                    try {
                        if (output.length == 0)
                            console.log("output is blank ");
                        else
                            obj = JSON.parse(output);
                    } catch (ex) {
                        console.error("error in parse " + ex);
                    }
                    jsonVal = obj;

                    var retJsonVarName = 'retJson' + methName;
                    body += "   var " + retJsonVarName + " = " + JSON.stringify(jsonVal, null, 4) + "  \n \n \n" +
                        "   " + methName + "() : new Observable(observer => {  \n " +
                        "        observer.next(" + retJsonVarName + ");" +
                        "\n  " +
                        "   }); \n \n ";
                    if (isInputdataFromFileOver) {
                        eventEmitter.emit('data_received');
                    }

                });

           }
    });


    lineReader.on('close', function () {
        console.log('closing the file :', body);
        isInputdataFromFileOver = true;
    });

    var writeToFile = function () {

        content = head + body + tail;
        console.log("now write the file");
        fileSys.writeFile(fileName, content, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    }

    eventEmitter.on('data_received', writeToFile);

}

createFileWithContents();

/*// Create an event handler as follows
var connectToTheHandler = function connected() {
    console.log('Test connection was successful.');

    // Fire the data_received_success event 
    eventEmitter.emit('data_received_success');
};


// Bind the connection_success event with the handler
eventEmitter.on('connection_success', connectToTheHandler);

// Bind the data_received_success event with the anonymous function
eventEmitter.on('data_received_success', function () {
    console.log('Confirmed that the data has been received successfully.');
});


// Fire the connection_success event 
eventEmitter.emit('connection_success');

console.log("Program has successfully ended!");*/