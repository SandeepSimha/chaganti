var mongoose    =   require("mongoose");

var mongoUri = process.env.MONGODB_URI || 'mongodb://chsandeep:Sandeep@511@ds017195.mlab.com:17195/heroku_nr1vzxjj' ;
mongoose.connect(mongoUri); 

//mongoose.connect('mongodb://localhost:27017/test');

var Schema = mongoose.Schema;

//create Schemas


var AlbumParts = new Schema({
    part_name: {type: String, required: "true"},
    part_url: {type: String, required: "true"}
});

var Album = new Schema({
     album_title: { type: String, required : "true" },
     album_image_file: { type: String, required : "true" },
     album_parts: [AlbumParts]
});


// Music Model
var Music =new Schema({  
    title: { type: String, required : "true"},  
    title_image_url: { type: String, required : "true" },  
    album: [Album],
    modified: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Music',Music);