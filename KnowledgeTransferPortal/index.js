

const express = require('express');
const bodyParser = require('body-parser');
// Key vault
// const msRestAzure = require('ms-rest-azure');
// const KeyVault = require('azure-keyvault');

// const config = require('./config/auzre.config');
// const passport = require('passport');
// create express app
const app = express();

// const http = require('http');
const mongoose = require('mongoose');

const config = require('config');
// const AADCreds = config.get('AADCreds');
// const OIDCBearerStrategy = require('passport-azure-ad').BearerStrategy;

// const isProduction = config.get('Production');
// var appFile = require('./app.js');


// Require  routes
const videoRoute = require('./app/routes/videoRoute');


// const deployPath = process.env.deployPath || '';
// const server = http.createServer(app);
// const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    'extended': true
}));

// parse requests of content-type - application/json
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Pragma');
    res.header('Access-Control-Expose-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Pragma');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});


// / -------- Start: Code for development environment ----------

// if (!isProduction) {

    // define a simple route
    app.get('/', (req, res) => {
        res.json({
            'message': 'Welcome to Knowledge Portal application.'
        });
    });

    // configure  routes
    app.use('/api', videoRoute);

    // listen for requests
    app.listen(3000, () => {
        console.log('Server is listening on port 3000');
    });


    // Configuring the database
    const dbConfig = config.get('DB');

    // const dbConfig = require('./config/database.config.js');

    // Connecting to the database
    mongoose.connect(dbConfig.url, {
        'useNewUrlParser': true
    }).then(() => {
        console.log('Successfully connected to the database');
        var appFile = require('./application.js');
    })
        .catch(err => {
            console.log(`Could not connect to the database. Exiting now...${err}`);
            process.exit();
        });

        // var appFile = require('./application.js');