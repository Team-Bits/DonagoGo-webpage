let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let purchaseSchema = mongoose.Schema ({

	id 							:		{type: String, require: false},
	userPurchaseId	:		{type: String, require: false},
	userSaleId			:		{type: String, require: false},
	productId 			:		{type: String, require: false},
	timeOfPurchase 	:		{type: Date, require: false}
});

let Purchase = mongoose.model('purchases', purchaseSchema);

let Purchases = {
	
	get: function(){
		return Purchase.find().then(purchases => {
			return purchases;
		}).catch(error => {
			throw Error(error);
		});
	},

	post: function(createdPurchase) {
		return Purchase.create(createdPurchase).then(purchase => {
			return purchase;
		}).catch(error => {
			throw Error(error);
		});
	},

	update: function(updatedPurchase) {
		return Purchase.updateOne({id:updatedPurchase.id}, updatedPurchase).then(purchase => {
			return purchase;
		}).catch(error => {
			throw Error(error);
		});
	},

	delete: function(purchaseId) {
		return Purchase.findOneAndRemove({id:purchaseId}).then(purchase => {
			return purchase;
		}).catch(error => {
			throw Error(error);
		});
	}
};

module.exports = {Purchases};