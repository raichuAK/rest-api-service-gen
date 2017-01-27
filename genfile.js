var fileSys = require('fs');
var content = '';

function createFileWithContents(fileName, content){

var fileNameConstant = '.service.ts';
var extFileName = 'Some';

var fileName = extFileName.concat(fileNameConstant);
 
    var url = "http://localhost:3333/rest/api/activities/176366.json?basicInfo=false";

    var pathArray = url.split("/");
    var lastPart = pathArray[pathArray.length-1];
    var resp = {"ok" : "1", "info" : "abc"};
    var methName = lastPart.replace(/[^a-zA-Z0-9_-]/g,'');
    content = " function "+methName+"(){                        \n"+
     "//make angular http call; \n              var response = "+JSON.stringify(resp) +" \n }";
    console.log("fileName "+fileName+" extFileName "+extFileName+" fileNameConstant "+fileNameConstant);
fileSys.writeFile(fileName, content, function(err) {

        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 

}

createFileWithContents();