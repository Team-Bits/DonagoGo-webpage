let express = require( "express" );
let morgan = require( "morgan" );
let uuid = require("uuid");

let bodyParser = require( "body-parser" );
let jsonParser = bodyParser.json();

// let mongoose = require( "mongoose" );

// let { Products } = require('./model');
// let { Users } = require('./model');
// let { Purchases } = require('./model');

let app = express();

// mongoose.Promise = global.Promise;

app.use( express.static( "public" ) );
app.use( morgan( "dev" ) );

let Products = [

	// {
	// 	id: uuid.v4(),
	// 	name : "",
	// 	description : "",
	// 	image : "",
	// 	location : "",
	// 	timeCreated : new Date(""),
	// 	quantity : 1,
	// 	universalCode : "",
	// 	guarantee : new Date(""),
	// 	brand : "",
	// 	model : "",
	// 	year : "",
	// 	condition : "",
	// 	category : "",
	// },

	{
		id: uuid.v4(),
		userId : "1",
		name : "Cable USB Micro",
		description : "Lo tenía porque compré el Aifon s9 plus ultramega pirruris. Pero pues ya salió el Aifon s11 y pues el que tengo ya no sirve pa pura 🍆. Como tiene nuevo cable, pues por eso ya no sirve este",
		image : "cable.jpg",
		location : "Parque Fundidora",
		timeCreated : new Date("December 17, 1995 03:24:00"),
		quantity : 1,
		universalCode : "",
		guarantee : new Date("December 17, 1995 03:24:00"),
		brand : "UGREEN",
		model : "",
		year : "2017",
		condition : "Usado",
		category : "tech"
	},

	{
		id: uuid.v4(),
		userId : "2",
		name : "Chamarra",
		description : "Chamarra de Cuero color negro. Mi mama la compro en internet hace 2 años (principios del 2018)",
		image : "jacket.jpg",
		location : "Parque Fundidora",
		timeCreated : new Date("December 17, 1995 03:24:00"),
		quantity : 1,
		universalCode : "",
		guarantee : new Date("December 17, 1995 03:24:00"),
		brand : "Elite",
		model : "",
		year : "",
		condition : "Usado",
		category : "clothes"
	},

	{
		id: uuid.v4(),
		userId : "3",
		name : "Iphone 12",
		description : "Color Negro, Por adentro blanco. 2 años de uso",
		image : "phone.jpg",
		location : "Parque Fundidora",
		timeCreated : new Date("December 17, 1995 03:24:00"),
		quantity : 1,
		universalCode : "",
		guarantee : new Date("December 17, 1995 03:24:00"),
		brand : "Apple",
		model : "12",
		year : "",
		condition : "Usado",
		category : "tech"
	},

	{
		id: uuid.v4(),
		userId : "4",
		name : "Macbook Pro",
		description : "Macbook Pro, la compré 4 años de uso mas o menos. Sin detalles",
		image : "oldLap.jpg",
		location : "Parque Fundidora",
		timeCreated : new Date("December 17, 1995 03:24:00"),
		quantity : 1,
		universalCode : "",
		guarantee : new Date("December 17, 1995 03:24:00"),
		brand : "Apple",
		model : "Macbook Pro",
		year : "2015",
		condition : "Usado",
		category : "tech"
	},

	{
		id: uuid.v4(),
		userId : "5",
		name : "Iphone XR",
		description : "Lo consegui en Telcel, por mi cumpleaños. Tiene un crack de la mica, no del telefono",
		image : "phone.jpg",
		location : "Parque Fundidora",
		timeCreated : new Date("December 17, 1995 03:24:00"),
		quantity : 1,
		universalCode : "",
		guarantee : new Date("December 17, 1995 03:24:00"),
		brand : "Apple",
		model : "XR",
		year : "2019",
		condition : "Usado",
		category : "tech"
	},

	{
		id: uuid.v4(),
		userId : "6",
		name : "Cafe Timhortons",
		description : "Chocolate caliente pequeño con poca azucar y costo 40 pesos. ",
		image : "coffee.jpg",
		location : "Tecnologico de Monterrey Biblio piso 3",
		timeCreated : new Date("December 17, 1995 03:24:00"),
		quantity : 1,
		universalCode : "",
		guarantee : new Date("December 17, 1995 03:24:00"),
		brand : "Tim Hortons",
		model : "Chocolate Caliente mexicano",
		year : "2019",
		condition : "Usado",
		category : "food"
	}
];

// let Users = [

// 	{
// 		id : uuid.v4(),
// 		name : "",
// 		lastName : "",
// 		email : "",
// 		password : "",
// 		idPurchases : [],
// 		idSales : [],
// 		phoneNumbers : [],
// 		directions: []
// 	},
// ];

let Purchases = [
	{
		id : uuid.v4(),
		userPurchaseId : "1",
		userSaleId : "4",
		timeOfPurchase: new Date("December 17, 1995 03:24:00"),
		name : "Cafe Timhortons",
		image : "coffee.jpg",
		location : "Tecnologico de Monterrey Biblio piso 3",
		timeSchedule : new Date("December 17, 1995 03:24:00")
	},

	{
		id : uuid.v4(),
		userPurchaseId : "2",
		userSaleId : "4",
		timeOfPurchase: new Date("December 17, 1995 03:24:00"),
		name : "Cafe Timhortons",
		image : "coffee.jpg",
		location : "Tecnologico de Monterrey Biblio piso 3",
		timeSchedule : new Date("December 17, 1995 03:24:00")
	},

	{
		id : uuid.v4(),
		userPurchaseId : "1",
		userSaleId : "4",
		timeOfPurchase: new Date("December 17, 1995 03:24:00"),
		name : "Iphone 12",
		image : "phone.jpg",
		location : "Parque Fundidora",
		timeSchedule : new Date("December 17, 1995 03:24:00")
	}
];

// Purchases
app.get('/purchases', (req, res, next) => {
	return res.status(200).json(Purchases); 	
});

// Products
app.get('/products', (req, res, next) => {
	return res.status(200).json(Products); 	
});

app.post('/products', jsonParser, (req, res, next) => {

	let createdProduct = {
		id : uuid.v4(),
		userId : req.body.userId,
		name : req.body.name,
		description : req.body.description,
		image : req.body.image,
		location : req.body.location,
		timeCreated : req.body.timeCreated,
		quantity : req.body.quantity,
		universalCode : req.body.universalCode,
		guarantee : req.body.guarantee,
		brand : req.body.brand,
		model : req.body.model,
		year : req.body.year,
		condition : req.body.condition,
		category : req.body.category
	};

	Products.push(createdProduct);

	res.statusMessage = "Product was posted";
	return res.status(200).json(createdPost);
});

app.listen('8080', () => {
	console.log("Lab7 running on port 8080");
});