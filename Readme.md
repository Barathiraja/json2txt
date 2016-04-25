json2txt
========


utility to convert json to a txt file with the given delimiter.

Installation
------------

    npm install json2txt

Usage
------

Use to generate file:

    var json2txt = require('json2txt');

    var filePath='user/local/files/example.txt'

    var json = {
        foo: 'bar',
        qux: 'moo',
        poo: 123,
        stux: new Date()
    }
       var options = {
            delimiter: '|',
            header: false
        }

json2txt.generateTxtFile(filePath,json,options);



