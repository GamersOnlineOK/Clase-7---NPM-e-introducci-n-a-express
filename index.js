// import express from 'express'
const { allowUnknownOption } = require('commander');
const { count } = require('console');
const { json } = require('express');
const express = require('express');
const fs = require("fs");

const app = express();
var random = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}
let randomPort = random(3000, 4000);
const server = app.listen(3000, () => {
    console.log("listen" + randomPort);
});
app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname })
});

app.get('/items', (req, res) => {
    var count = visitasWebdos();
    webdos=(count.next().value);
    fs.promises.readFile('./productos.txt')
        .then(data => data.toString('utf-8'))
        .then(datos => {
            const json = JSON.parse(datos);
            res.json({ item: json, cantidad: json.length })
        })
});
app.get('/item-random', (req, res) => {
    var count = visitasWebuno();
    webuno=(count.next().value);
    


    fs.promises.readFile('./productos.txt')
        .then(data => data.toString('utf-8'))
        .then(datos => {
            const json = JSON.parse(datos);
            res.json({ item: json[random(0, json.length - 1)] })
        })


})
let webuno=0;
let webdos=0;
app.get('/visitas', (req, res) => {

    
   
    res.json({item:webdos,ItemRandom:webuno})
    
   
    
})

// =======================================ASYNC==================================



var i = 1;
var e = 1;
// ================================================
function* visitasWebuno() {

    while (true)
        yield e++;
}
function* visitasWebdos() {

    while (true)
        yield i++;
}
