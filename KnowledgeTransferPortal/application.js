
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
var blobUrl = 'https://storageaccount2ams.blob.core.windows.net/demo/EnglishVideoDownloaded.mp4';

var vidTitle = ((blobUrl.split('.mp4'))[0].split('/'));
var length = vidTitle.length
var title = vidTitle[length-1];
console.log(title);

     var proc = new ffmpeg({ source: 'https://storageaccount2ams.blob.core.windows.net/demo/EnglishVideoDownloaded.mp4', nolog: true })
//      console.log
//      ("hoiiiiiiiiiiiii");
// module.exports = {
//    hello: function() {
//       return videoUrl.split('.mp4')[0];
//    }
// }
// console.log("Hey.. you got")

     
     proc.setFfmpegPath("C:/Program Files/nodejs/ffmpeg.exe")
     .toFormat('wav')

     .on('end', function() {
     console.log('file has been converted successfully');
     var vibhor = require('./vibhor.js');
     vibhor.test(title)
     
     })
     .on('error', function(err) {
     console.log('an error happened: ' + err.message);
     })
     // save to file <-- the new file I want -->
     .saveToFile('C:/Users/dell/Desktop/video_store/' +title +'.wav');
















