let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let productSchema = mongoose.Schema ({

	id 						:		{type: String, require: false},
	userId 				:		{type: String, require: false},
	name 					:		{type: String, require: false},
	description		:		{type: String, require: false},
	image					:		{type: String, require: false},
	location 			:		{type: String, require: false},
	timeCreated		:		{type: Date, require: false},
	quantity 			:		{type: Number, require: false},
	universalCode	:		{type: String, require: false},
	guarantee			:		{type: Date, require: false},
	brand 				:		{type: String, require: false},
	model 				:		{type: String, require: false},
	year 					:		{type: String, require: false},
	condition 		:		{type: String, require: false},
	category 			:		{type: String, require: false},
	bought 				:		{type: Boolean, require: false} 
});

let Product = mongoose.model('products', productSchema);

let Products = {
	
	get: function(){
		return Product.find().then(products => {
			return products;
		}).catch(error => {
			throw Error(error);
		});
	},

	post: function(createdProduct) {
		return Product.create(createdProduct).then(product => {
			return product;
		}).catch(error => {
			throw Error(error);
		});
	},

	update: function(updatedProduct) {
		return Product.updateOne({id:updatedProduct.id}, updatedProduct).then(product => {
			return product;
		}).catch(error => {
			throw Error(error);
		});
	},

	delete: function(productID) {
		return Product.findOneAndRemove({id:productID}).then(product => {
			return product;
		}).catch(error => {
			throw Error(error);
		});
	}
};

module.exports = {Product};