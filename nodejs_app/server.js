 'use strict'; //JavaScript run in strict mode

// Using Express freamework for node.js
 const express = require('express');

 // Constants
 const PORT = 8080;
 const HOST = '0.0.0.0';

 // App
 const app = express();

 // get() to catch the incoming "GET /" and then invoke callback function
 // res to return back the page a string usns res.send()
 app.get('/', (req, res) => {
 	res.send('Hello World\n');
 });

// app.listen() is a wrapper for http.createServer()
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);