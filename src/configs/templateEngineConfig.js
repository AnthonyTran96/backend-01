const express = require('express');
const path = require('path');

const templateEngineConfig = (app)=>{
    //config template engine
    app.set('view engine', "ejs");
    app.set('views', path.resolve(__dirname, "../views"));
    console.log(path.resolve(__dirname, "../public"));

    //config static file
    app.use(express.static(path.join(__dirname, '../public')));
}

module.exports = templateEngineConfig;