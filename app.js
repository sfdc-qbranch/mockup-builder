/*jslint node: true */
/*eslint no-undef: "error"*/
/*eslint-env node*/
/*eslint no-console: 0*/

"use strict";

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();


app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));



app.use(bodyParser.urlencoded({
   extended: false
}));



//Homepage
app.get('/',function(req,res){
    res.render('notifications');
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


app.get('/facebook',function(req,res){
    res.render('facebook');
});

app.get('/email',function(req,res){
    res.render('email');
});


app.get('/test',function(req,res){
    res.render('test');
});

app.listen(3000, function(){
    console.log('listen on port 3000');
});


