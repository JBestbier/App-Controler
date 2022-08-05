const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const appsRouter = require('https://gitcdn.link/cdn/JBestbier/App-Controler/main/routes/index.js');

// Init Express
const app = express();

// App Middlewear
app.use(express.urlencoded());
app.use(express.static('./public'));
app.use(cors());
app.use(morgan());
app.use(bodyParser.json());
app.use('', appsRouter);


// // Port listen
// const PORT = 8080;
// app.listen(PORT, () => console.log('Listening on: ' + PORT));
