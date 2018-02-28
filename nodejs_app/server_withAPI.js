'use strict'; //JavaScript run in strict mode

// Using Express freamework for node.js
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// REST API
const router = express.Router();

router.route('/items')
.get(function(req, res, next) {
	res.send('Get');
})
.post(function(req, res, next) {
	res.send('Post');
})

router.route('/items/:id')
.get(function(req, res, next) {
	res.send('Get id: ' + req.params.id);
})
.put(function(req, res, next) {
	res.send('Put id: ' + req.params.id);
})
.delete(function(req, res, next) {
	res.send('Delete id: ' + req.params.id);
})

app.use('/api', router);

// index
// get() to catch the incoming "GET /" and then invoke callback function
// res to return back the page a string usns res.send()
app.get('/', (req, res) => {
	res.send('Hello World\n');
});

// app.listen() is a wrapper for http.createServer()
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);