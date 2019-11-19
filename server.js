let mongoose = require( "mongoose" );
let express = require( "express" );
let morgan = require( "morgan" );
let uuid = require("uuid");

let bodyParser = require( "body-parser" );
let jsonParser = bodyParser.json();

mongoose.Promise = global.Promise;

let {Products} = require('./model');
let {DATABASE_URL, PORT} = require('./config');

let app = express();

app.use(express.static("public"));
app.use(morgan("dev"));
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	next();
});

// ----------------- Users --------------------
// ----------------- Purchases ----------------
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

	// let createdProduct = {
	// 	id: uuid.v4(), 
	// 	userId: "1",
	// 	name: req.body.name,
	// 	description: req.body.description,
	// 	image: req.body.image,
	// 	location: req.body.location,
	// 	timeCreated: req.body.timeCreated,
	// 	quantity: req.body.quantity,
	// 	universalCode: req.body.universalCode,
	// 	guarantee: req.body.guarantee,
	// 	brand: req.body.brand,
	// 	model: req.body.model,
	// 	year: req.body.year,
	// 	condition: req.body.condition,
	// 	category: req.body.category,
	// 	bought: req.body.bought
	// };

	let createdProduct = {
		id: "1", 
		userId: "2",
		name: "2",
		description: "3",
		image: "4",
		location: "5",
		timeCreated: req.body.timeCreated,
		quantity: 6,
		universalCode: "7",
		guarantee: req.body.guarantee,
		brand: "8",
		model: "9",
		year: "10",
		condition: "11",
		category: "12",
		bought: "13"
	};

	Products.post(createdProduct).then(product => {
		return res.status(201).json(product);
	}).catch(error => {
		return res.status(500).json({
			message: "Something went wrong with the DB",
			status: 502
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