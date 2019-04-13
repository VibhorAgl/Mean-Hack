





(function() {
//    "use strict";

module.exports = {
    test: function(title) {
        var mainUrl= 'C:/Users/dell/Desktop/video_store/'
        var videoUrl = mainUrl + title +'.wav'
    

    
    // pull in the required packages.
    var sdk = require("microsoft-cognitiveservices-speech-sdk");
    var fs = require("fs");
    
    var settings = require("./settings");
    var speech = require("./speech");
    var intent = require("./intent");
    var translate = require("./translation");
    console.log("hi i am vibhor");

    function openPushStream(filename) {
        // create the push stream we need for the speech sdk.
        var pushStream = sdk.AudioInputStream.createPushStream();
    
        // open the file and push it to the push stream.
        fs.createReadStream(filename).on('data', function(arrayBuffer) {
            pushStream.write(arrayBuffer.buffer);
        }).on('end', function() {
            pushStream.close();
        });
    
        return pushStream;
    }


    
    
    if (process.argv.length > 3) {
        settings.filename = process.argv[3];
    }
    
    if (process.argv.length >= 2) {
        switch (process.argv[1]) {
            case "intent":
                console.log("Now recognizing intent from: " + videoUrl);
                intent.main(settings, openPushStream(videoUrl));
                break;
    
            case "translate":
                console.log("Now translating from: " + videoUrl);
                translate.main(settings, openPushStream(videoUrl));
                break;
    
            case "speech":
            default:
                console.log("Now recognizing speech from: " + videoUrl);
                speech.main(settings, openPushStream(videoUrl),title);
                break;
        }
    }
    else {
        console.log("usage: index.js [speech|intent|translate] {filename}");

    }

}}
}());