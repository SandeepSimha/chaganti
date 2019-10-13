
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

// POST to CREATE
.post(function(req, res){
	var music;
	var response = {};

     music = new mongoOp({
        title : req.body.title,
        title_image_url : req.body.title_image_url,
        album : req.body.album
     });

    music.save(function(err){
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
