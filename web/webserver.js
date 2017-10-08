const requestify = require('requestify');
const os = require("os");
const moment = require('moment');
const fs = require('fs');
const minify = require('express-minify');
const express = require('express');
const app = exports.app = express();
const http = require('http');
const utils = require('./utils');
var path = require('path');
var minifyHTML = require('express-minify-html');
var gclient;

module.exports = function(config, client) {


    var guildcount = 0;
    gclient = client;
    var usercount = 0;

    String.prototype.replaceAll = function(search, replacement) {
        let target = this;
        return target.replace(new RegExp(search, 'g'), replacement);
    };



    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    app.use(express.static(path.join(__dirname, 'static')))
    app.use(minifyHTML({
        override: true,
        exception_url: false,
        htmlMinifier: {
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true,
            minifyJS: true
        }
    }));

    http.createServer(app).listen(config.port, (err) => {
        if (err) {
            console.error(`FAILED TO OPEN WEB SERVER, ERROR: ${err.stack}`);
            return;
        }
        console.info(`Successfully started server.. listening on port ${config.port}`);
})

    app.get("/", (req, res) => {
        try {
            function format(seconds) {
        function pad(s) {
            return (s < 10 ? '0' : '') + s;
        }
        var hours = Math.floor(seconds / (60 * 60));
        var minutes = Math.floor(seconds % (60 * 60) / 60);
        var seconds = Math.floor(seconds % 60);

        return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
    }
    let uptime = process.uptime();

/*    client.shard.fetchClientValues('guilds.size').then(results => {
        guildcount = results.reduce((prev, val) => prev + val, 0);
});

    client.shard.fetchClientValues('users.size').then(results => {
        usercount = results.reduce((prev, val) => prev + val, 0);
});*/

    res.render('index', {
        botuptime: format(uptime),
        guildamount: /*guildcount*/client.guilds.size,
        useramount: /*usercount*/client.users.size,
        description: "The bot noone wanted",
        url: config.url
    })
} catch (err) {
        renderErrorPage(res, err, client);
        console.error(`Unable to load home page, Error ${err.stack}`);
    }
});

    app.get('/add', (req, res) => {
        try {
            res.redirect(config.invitelink);

} catch (err) {
        console.error(`An error occurred trying to redirect to the bot page, Error: ${err.stack}`);
        renderErrorPage(req, res, err, client);
    }
});


    // Error
    app.get("/error", (req, res) => {
        try {
            res.render('error', {
            error_code: 500,
            error_text: "Why did you go to this URL? Normally an error message will be displayed here.",
            description: 'Error',
            url: config.url
        })
    } catch (err) {
        console.error(`An error has occurred trying to load the error page, Error: ${err.stack}`);
        renderErrorPage(req, res, err, client);
    }
});

    //404 Error page (Must be the last route!)
    app.use(function(req, res, next) {
        try {
            res.render('error', {
                error_code: 404,
                error_text: "The page you requested could not be found or rendered. Please check your request URL for spelling errors and try again. If you believe this error is faulty, please contact a system administrator.",
                description: 'Error',
                url: config.url
            })
        } catch (err) {
            console.error(`An error has occurred trying to load the 404 page, Error: ${err.stack}`);
            renderErrorPage(req, res, err, client);
        }
    });
};

function renderErrorPage(req, res, err, client) {

    if (err) {
        console.error(`An error has occurred in Web.js, Error: ${err.stack}`);
        res.render('error', {
            error_code: 500,
            error_text: err,
            description: 'Error',
            url: config.url
        })
    } else {
        res.render('error', {
            error_code: 500,
            error_text: errorText,
            description: 'Error',
            url: config.url
        })
    }
}