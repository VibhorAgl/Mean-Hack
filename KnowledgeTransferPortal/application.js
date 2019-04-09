
var os = require('os');
var ffmpeg = require('fluent-ffmpeg');


var fs = require('fs');
const path = require('path');
var fse = require('fs-extra');
var unzip = require('unzip');
var xml2js = require('xml2js');
var jsonfile = require('jsonfile');
var pointer = require('json-pointer');
var parser = new xml2js.Parser()



var ffmpeg = require('fluent-ffmpeg');

     var proc = new ffmpeg({ source: 'https://storageaccount2ams.blob.core.windows.net/demo/EnglishVideoDownloaded.mp4', nolog: true })
     proc.setFfmpegPath("C:/Program Files/nodejs/ffmpeg.exe")


     .toFormat('wav')

     .on('end', function() {
     console.log('file has been converted successfully');
     var vibhor = require('./vibhor.js');
     })
     .on('error', function(err) {
     console.log('an error happened: ' + err.message);
     })
     // save to file <-- the new file I want -->
     .saveToFile('C:/Users/dell/Desktop/video_store/fundamentals.wav');
















