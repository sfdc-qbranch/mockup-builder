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
app.get('/page1',function(req,res){
    res.render('page1');
});

app.get('/page2',function(req,res){
    res.render('page2');
});


app.get('/lockScreenNotifications',function(req,res){
    res.render('lockScreenNotifications');
});


app.get('/page4',function(req,res){
    res.render('page4');
});

app.get('/page5',function(req,res){
    res.render('page5');
});


app.listen(3000);
console.log('listen on port 3000');

