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