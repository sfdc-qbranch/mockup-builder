/*jslint node: true */
/*eslint no-undef: "error"*/
/*eslint-env node*/
/*eslint no-console: 0*/

"use strict";

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set("views", __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
   extended: false
}));


//Homepage
app.get('/',function(req,res){
   res.render('home');
});

//testImage - test upload image, add text, save as png
app.get('/livechat',function(req,res){
    res.render('livechat');
});

app.get('/livemessage',function(req,res){
    res.render('livemessage');
});


app.get('/notifications',function(req,res){
    res.render('notifications');
});


app.get('/facebookstandardad',function(req,res){
    res.render('facebookstandardad');
});

app.get('/email',function(req,res){
    res.render('email');
});


app.listen(3000);
console.log('listen on port 3000');

