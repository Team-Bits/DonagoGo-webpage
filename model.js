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

let userSchema = mongoose.Schema ({

	id 						:		{type: String, require: true},
	name 					:		{type: String, require: true},
	lastName			:		{type: String, require: true},
	email 				:		{type: String, require: true},
	password 			:		{type: String, require: true},
	logged				: 	{type: Boolean, require: false},
	idPurchases 	: 	[Number],
	idSales 			: 	[Number],
	phoneNumbers	: 	[String],
	directions 		: 	[String]
});

let Product = mongoose.model('products', productSchema);
let User = mongoose.model('users', userSchema);

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

let Users = {
	
	get: function(){
		return User.find().then(users => {
			return users;
		}).catch(error => {
			throw Error(error);
		});
	},

	post: function(createdUser) {
		return User.create(createdUser).then(user => {
			return user;
		}).catch(error => {
			throw Error(error);
		});
	},

	update: function(updatedUser) {
		return User.updateOne({email:updatedUser.email}, updatedUser).then(user => {
			return user;
		}).catch(error => {
			throw Error(error);
		});
	},

	delete: function(userId) {
		return User.findOneAndRemove({id:userId}).then(user => {
			return user;
		}).catch(error => {
			throw Error(error);
		});
	}
};

module.exports = {Products};
module.exports = {Users};