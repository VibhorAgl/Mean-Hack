const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    'title': {
        'type': String,
        'required': false
    },
    'videoUrl': {
        'type': String,
        'required': false
    },
    'description': {
        'type': String,
        'required': false
    },
    'isActive':{
        'type': Boolean,
        'default':true
        
    },

    'isBookmark':{
        'type': Boolean,
        'default':false


    }
}, {
    'collection': 'Video',
    'versionKey': false
});

module.exports = mongoose.model('Video', videoSchema);