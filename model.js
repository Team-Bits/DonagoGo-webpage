let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let productSchema = mongoose.Schema ({

	id 						:		{type: String, require: true},
	userId 				:		{type: String, require: false},
	name 					:		{type: String, require: true},
	description		:		{type: String, require: true},
	image					:		{type: String, require: false},
	location 			:		{type: String, require: false},
	timeCreated		:		{type: String, require: false},
	quantity 			:		{type: Number, require: false},
	universalCode	:		{type: String, require: false},
	guarantee			:		{type: String, require: false},
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
		return product.find().then(products => {
			return products;
		}).catch(error => {
			throw Error( error );
		});
	},

	post: function(newProduct) {
		return product.create(newProduct).then(product => {
			return product;
		}).catch(error => {
			throw Error( error );
		});
	},

	update: function(updatedproduct) {
		return product.findOneAndUpdate({id:updatedproduct.id}, {$set:{updatedproduct}}).then(product => {
			return product;
		}).catch(error => {
			throw Error( error );
		});
	},

	delete: function(productID) {
		return product.findOneAndRemove({id:productID}).then(product => {
			return product;
		}).catch(error => {
			throw Error( error );
		});
	}
};

module.exports = {Product};