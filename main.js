


var fs = require('node-fs');

exports.generateTxtFile=function(filePath,data,options){

    var abc={author:'barathi',version:0.1},keyStr='',dataStr='',finalStr='';


    if(!filePath){
        console.log('file name not found for txt file generation')
    }
    if(!data){
        console.log('data String not found for txt file generation')
    }

    var formData=function(inputData){

        if(options.header==true) {

            for (var i in inputData) {

                keyStr = keyStr + i + options.delimiter
            }

            options.header=false;

        }
        for (var i in inputData) {

            dataStr = dataStr + inputData[i] + options.delimiter
        }

        if(Array.isArray(data)!=true){
            genFile()
        }


    };

    var genFile=function(){

        finalStr=keyStr+dataStr;

        finalStr=finalStr.slice(0,finalStr.lastIndexOf(options.delimiter));

        fs.writeFile(filePath, finalStr, function (err) {
            if (err) throw err;
            //console.log('It\'s saved! in same location.');
        });
    };

    if(Array.isArray(data)==true) {

        var count=1;

        data.forEach(function (dataItem) {

            formData(dataItem)

            if(count==data.length){
                genFile()
            }
            count++;
        })
    }
        else{
            formData(data)
        }


};

//var filePath='example.txt';
//
//var json = [
//{foo: 'bar',
//    qux: 'moo',
//    poo: 123,
//    stux: new Date()},
//
//       {foo: 'bar',
//        qux: 'moo',
//        poo: 123,
//        stux: new Date()},
//
//       {foo: 'bar',
//        qux: 'moo',
//        poo: 123,
//        stux: new Date()}
//];
//var abc={foo: 'bar',
//        qux: 'moo',
//        poo: 123,
//        stux: new Date()}
//var options = {
//    delimiter: '|',
//    headers: true
//};
//generateTxtFile(filePath,json,options)


