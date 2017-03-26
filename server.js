var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app  = express();


var acstkn = "vZjnrefjmtQCiA9N4k0zRToeYvslAgIsb_qOjLoJu1fRcU0LGotXHt5AqDZF7Np3YB29JlYyVFsclDuTVY9KJtpl7rHChDTuPNW4HSO5WQ0W7KzEmQuPZYqNRf3WWHYx";

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

app.use("/getdata", function(req, res) {
  //console.log('BLAIR')
  var url = "https://api.yelp.com/v3/businesses/search";
  var latitude = req.query.latitude;
  var longitude = req.query.longitude;
  var sort_by = req.query.sort_by;
  console.log(latitude);

  request({
	      url: url+'?latitude='+latitude+'&longitude='+longitude+'&sort_by='+sort_by,
		    method: 'GET',
		    headers: {
	            'Authorization': 'Bearer ' + acstkn
		    }

	    },function(err, resp, body){
	        if(err){
	            console.log(err)
	        }
	        else{
            console.log('blair');
            console.log(body);
	            res.send(JSON.parse(body));
	        }
	    })

})

app.use("/getdata2", function(req, res) {
  //console.log('BLAIR')
  var url = "http://yelpie.mybluemix.net/reviews";
  var id = req.query.id;
  var type = req.query.type;

  request({
	      url: url+'?type='+type+'&id='+id,
		    method: 'GET',

	    },function(err, resp, body){
	        if(err){
	            console.log(err)
	        }
	        else{
            console.log('blair');
            console.log(body);
	            res.send(JSON.parse(body));
	        }
	    })

})

app.use(express.static('public'));
app.listen(3000);
