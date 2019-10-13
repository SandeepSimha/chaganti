var mongoose    =   require("mongoose");

var mongoUri = process.env.MONGODB_URI || 'mongodb://chsandeep:Sandeep@511@ds017195.mlab.com:17195/heroku_nr1vzxjj' ;
mongoose.connect(mongoUri);

//mongoose.connect('mongodb://localhost:27017/test');

var Schema = mongoose.Schema;

var Product = new Schema({
    product_id: {type: String, required: "true"},
    product_name: {type: String, required: "true"},
    product_description: {type: String, required: "true"},
    product_price: {type: String, required: "true"},
    product_is_spicy: {type: Boolean, default: false, required: "true"}
});

var SubCategory = new Schema({
    sub_cat_id: {type: String, required: "true"},
    sub_cat_name: {type: String, required: "true"},
    sub_cat_description: {type: String, required: "true"},
    product: [Product]
});

var Categories = new Schema({
     cat_id: { type: String, required : "true" },
     cat_name: { type: String, required : "true" },
     cat_description: { type: String, required : "true" },
     sub_category: [SubCategory]
});

// Restaurant Model
var Restaurant = new Schema({
    rest_name: { type: String, required : "true"},
    rest_image_url_log: { type: String, required : "true" },
    rest_address: { type: String, required : "true" },
    rest_dine_in: { type: Boolean, default: false, required : "false" },
    rest_takeout: { type: Boolean, default: false, required : "false" },
    categories: [Categories],
    modified: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Restaurant',Restaurant);
