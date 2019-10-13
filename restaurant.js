
var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var mongoOp     =   require("./model/rest");
var router      =   express.Router();
var http = require('http');

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

// app.use(express.static(__dirname+ '/website'));

router.get("/",function(req,res){
    res.json({"error" : false,"message" : "To access the endpoint/restaurants"});
});


// REST api
router.route('/restaurants')
	.get(function(req, res){
	var response = {};
	mongoOp.find({}, function(err, data){
		if(err){
			response = {"error": true, "message": data};
		}
		else{
			response = {"error" : false,"message" : data};
		}
		res.json(response);
	});
})

// POST to CREATE restaurant object
.post(function(req, res) {
	var restaurant;
	var response = {};

     restaurant = new mongoOp({
        rest_name : req.body.rest_name,
        rest_image_url_log : req.body.title_image_url,
        rest_address : req.body.rest_address,
        rest_dine_in : req.body.rest_dine_in,
        rest_takeout : req.body.rest_takeout
     });

    restaurant.save(function(err){
            if(err) {
                response = {"error" : true,"message" : "Error adding data"};
            } else {
                response = {"error" : false,"message" : "Data added"};
            }
            res.json(response);
        });
});

app.use('/',router);

app.listen(app.get('port'),function(){
    console.log("Listening to PORT 3000");
});
