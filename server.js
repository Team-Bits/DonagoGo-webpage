let mongoose = require( "mongoose" );
let express = require( "express" );
let morgan = require( "morgan" );
let uuid = require("uuid");

let bodyParser = require( "body-parser" );
let jsonParser = bodyParser.json();

mongoose.Promise = global.Promise;

let {Users} = require('./models/user-model');
let {Products} = require('./models/product-model');
let {Purchases} = require('./models/purchase-model');

let {DATABASE_URL, PORT} = require('./config');

let app = express();

app.use(express.static("public"));
app.use(morgan("dev"));
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	next();
});

// ----------------- Users --------------------

// GET
app.get('/users', (req, res, next) => {

	Users.get().then(User => {
		return res.status(200).json(User);
	}).catch(error => {
		return res.status(500).json({
			status : 500,
			message : "Something went wrong"
		});
	});	
});

// POST
app.post('/users', jsonParser, (req, res, next) => {

	let createdUser = {
		id 						:		uuid.v4(),
		name 					:		req.body.name,
		lastName			:		req.body.lastName,
		email 				:		req.body.email,
		password 			:		req.body.password,
		logged				: 	false,
		idPurchases 	: 	[],
		idSales 			: 	[],
		phoneNumbers	: 	[],
		directions 		: 	[]
	};

	Users.post(createdUser).then(user => {
		return res.status(201).json(user);
	}).catch(error => {
		return res.status(500).json({
			message: "Something went wrong with the DB",
			status: 500
		})
	});
});

app.put("/users/:email", jsonParser, (req, res, next) => {

	Users.update(req.body).then(users => {
		return res.status(202).json(users);
	}).catch(err => {
		return res.status(500).json({
			message: "Something went wrong with the DB",
			status: 500
		})
	});
});

// ----------------- Purchases ----------------
// GET
app.get('/purchases', (req, res, next) => {

	Purchases.get().then(Purchase => {
		return res.status(200).json(Purchase);
	}).catch(error => {
		return res.status(500).json({
			status : 500,
			message : "Something went wrong"
		});
	});	
});

// POST
app.post('/purchases', jsonParser, (req, res, next) => {

	let createdPurchase = {
		id 							:		uuid.v4(),
		userPurchaseId	:		req.body.userPurchaseId,
		userSaleId			:		req.body.userSaleId,
		productId 			:		req.body.productId,
		timeOfPurchase 	:		req.body.timeOfPurchase
	};

	Purchases.post(createdPurchase).then(purchase => {
		return res.status(201).json(purchase);
	}).catch(error => {
		return res.status(500).json({
			message: "Something went wrong with the DB",
			status: 500
		})
	});
});

app.delete('/purchases/:id', jsonParser, (req, res, next) => {
	Purchases.update(req.body).then(purchases => {
		return res.status(202).json(purchases);
	}).catch(error => {
		return res.status(500).json({
			message: "Something went wrong with the DB",
			status: 500
		})
	});
});

// ----------------- Products -----------------

// GET
app.get('/products', (req, res, next) => {

	Products.get().then(Product => {
		return res.status(200).json(Product);
	}).catch(error => {
		return res.status(500).json({
			status : 500,
			message : "Something went wrong"
		})
	});	
});

// POST
app.post('/products', jsonParser, (req, res, next) => {

	let createdProduct = {
		id 						: 	uuid.v4(), 
		userId				: 	req.body.userId,
		name					: 	req.body.name,
		description		: 	req.body.description,
		image					: 	req.body.image,
		location			: 	req.body.location,
		timeCreated		: 	req.body.timeCreated,
		quantity			: 	req.body.quantity,
		universalCode	: 	req.body.universalCode,
		guarantee			: 	req.body.guarantee,
		brand					: 	req.body.brand,
		model					: 	req.body.model,
		year					: 	req.body.year,
		condition			: 	req.body.condition,
		category			: 	req.body.category,
		bought				: 	req.body.bought
	};

	Products.post(createdProduct).then(product => {
		return res.status(201).json(product);
	}).catch(error => {
		return res.status(500).json({
			message: "Something went wrong with the DB",
			status: 500
		})
	});
});

app.delete("/products/:id", jsonParser, (req, res, next) => {
	Products.delete(req.params.id).then(product => {
		return res.status(201).json(product);
	}).catch(error => {
		return res.status(500).json({
			message: "Something went wrong",
			status: 500
		})
	});
});

app.put("/products/:id", jsonParser, (req, res, next) => {
	Products.update(req.body).then(products => {
		return res.status(202).json(products);
	}).catch(error => {
		return res.status(500).json({
			message: "Something went wrong with the DB",
			status: 500
		})
	});
});

let server;

function runServer(port, databaseUrl) {
	return new Promise((resolve, reject) => {
		
		mongoose.connect(databaseUrl, response => {
			
			if (response) {
				return reject(response);
			}

			else {
				
				server = app.listen(port, () => {
					console.log("App is running on port " + port);
					resolve();
				})
				
				.on('error', err => {
					mongoose.disconnect();
					return reject(err);
				})
			}
		});
	});
}

function closeServer() {
	return mongoose.disconnect().then(() => {
		return new Promise((resolve, reject) => {
			console.log('Closing the server');
			server.close(err => {
				if (err) {
					return reject(err);
				}
				else {
					resolve();
				}
			});
		});
	});
}

runServer(PORT, DATABASE_URL).catch(err => {
	console.log(err);
});