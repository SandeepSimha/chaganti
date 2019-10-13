var mongoose    =   require("mongoose");

var mongoUri = process.env.MONGODB_URI || 'mongodb://chsandeep:Sandeep@511@ds233278.mlab.com:33278/heroku_zlj13mmv';

mongoose.connect(mongoUri);

//mongoose.connect('mongodb://localhost:27017/test');

var Schema = mongoose.Schema;

var Product = new Schema({
    product_id: {type: String, required: "false"},
    product_name: {type: String, required: "false"},
    product_description: {type: String, required: "false"},
    product_price: {type: String, required: "false"},
    product_is_spicy: {type: Boolean, default: false, required: "false"}
});

var SubCategory = new Schema({
    sub_cat_id: {type: String, required: "false"},
    sub_cat_name: {type: String, required: "false"},
    sub_cat_description: {type: String, required: "false"},
    product: [Product]
});

var Categories = new Schema({
     cat_id: { type: String, required : "false" },
     cat_name: { type: String, required : "false" },
     cat_description: { type: String, required : "false" },
     sub_category: [SubCategory]
});

// Restaurant Model
var Restaurant = new Schema({
    rest_name: { type: String, required : "false"},
    rest_image_url_log: { type: String, required : "false" },
    rest_address: { type: String, required : "false" },
    rest_dine_in: { type: Boolean, default: false, required : "false" },
    rest_takeout: { type: Boolean, default: false, required : "false" },
    categories: [Categories],
    modified: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Restaurant',Restaurant);
