var mongoose    =   require("mongoose");

var mongoUri = process.env.MONGODB_URI || 'mongodb://chsandeep:Sandeep@511@ds017195.mlab.com:17195/heroku_nr1vzxjj' ;
mongoose.connect(mongoUri);

//mongoose.connect('mongodb://localhost:27017/test');

var Schema = mongoose.Schema;

// Music Model
var Restaurant = new Schema({
    rest_name: { type: String, required : "true"},
    rest_image_url_log: { type: String, required : "true" },
    rest_address: { type: String, required : "true" },
    rest_dine_in: { type: Boolean, required : "false" },
    rest_takeout: { type: Boolean, required : "false" },
    rest_categories: [Categories]
});

var Categories = new Schema({
     cat_id: { type: String, required : "true" },
     cat_name: { type: String, required : "true" },
     cat_description: { type: String, required : "true" },
     cat_sub_cat: [SubCategory]
});

var SubCategory = new Schema({
    sub_cat_id: {type: String, required: "true"},
    sub_cat_name: {type: String, required: "true"},
    sub_cat_description: {type: String, required: "true"},
    sub_cat_product: [Product]
});

var Product = new Schema({
    product_id: {type: String, required: "true"},
    product_name: {type: String, required: "true"},
    product_description: {type: String, required: "true"},
    product_price: {type: String, required: "true"},
    product_is_spicy: {type: Boolean, required: "true"}
});

module.exports = mongoose.model('Music',Music);
