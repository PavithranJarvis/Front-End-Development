### Create Project Structure

```sh
mkdir Npm && cd Npm
mkdir sample && cd  sample
npm init  -- this is for creating package.json
```

#### Install express And body-parser dependecy using npm

```shell
npm install express --save
npm install body-parser --save


after installing all dependecies of above, this all will be added in package.json  and also node_modules file will be added into your directory

{
  "name": "sample",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.18.2",
    "express": "^4.16.2"
  }
}


```shell
touch index.js
```
```Js

var express = require('express');
var app = express();
var bodyParser = require('body-Parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var router = express.Router();

router.get('/', function(req, res){
	res.json({ message: 'hello Welcome to your First API'});
});

app.use('/api', router);

app.listen(8080);
console.log('Sucess' +8080);


The main part of index.js 

1.) declare the ng-Modules and router.
2.) specify the end-point and its message to return the json format.
3.) Start the server to listen the assign port(8080)