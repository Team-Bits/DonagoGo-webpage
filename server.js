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

	{
		// id: uuid.v4(),
		id: "1",
		userId : "1",
		name : "Cable USB Micro",
		description : "Lo tenía porque compré el Aifon s9 plus ultramega pirruris. Pero pues ya salió el Aifon s11 y pues el que tengo ya no sirve. Como tiene nuevo cable, pues por eso ya no sirve este",
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
		category : "tech",
		bought : false
	},

	{
		// id: uuid.v4(),
		id: "2",
		userId : "2",
		name : "Chamarra",
		description : "Chamarra de Cuero color negro. Mi mama la compro en internet hace 2 años (principios del 2018) pero nunca la use",
		image : "jacket.jpg",
		location : "Parque Fundidora",
		timeCreated : new Date("December 17, 1995 03:24:00"),
		quantity : 1,
		universalCode : "",
		guarantee : new Date("December 17, 1995 03:24:00"),
		brand : "Elite",
		model : "",
		year : "",
		condition : "Nuevo",
		category : "clothes",
		bought : false
	},

	{
		// id: uuid.v4(),
		id: "3",
		userId : "1",
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
		category : "tech",
		bought : false
	},

	{
		// id: uuid.v4(),
		id: "4",
		userId : "3",
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
		category : "tech",
		bought : false
	},

	{
		// id: uuid.v4(),
		id: "5",
		userId : "1",
		name : "Iphone XR",
		description : "Lo consegui en Telcel, por mi cumpleaños. Tiene un crack de la mica, no del telefono",
		image : "bluePhone.jpg",
		location : "Parque Fundidora",
		timeCreated : new Date("December 17, 1995 03:24:00"),
		quantity : 1,
		universalCode : "",
		guarantee : new Date("December 17, 1995 03:24:00"),
		brand : "Apple",
		model : "XR",
		year : "2019",
		condition : "Usado",
		category : "tech",
		bought : false	
	},

	{
		// id: uuid.v4(),
		id: "6",
		userId : "2",
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
		category : "food",
		bought : false
	},

	{
		// id: uuid.v4(),
		id: "7",
		userId : "3",
		name : "",
		description : "",
		image : "",
		location : "",
		timeCreated : new Date(""),
		quantity : 1,
		universalCode : "",
		guarantee : new Date(""),
		brand : "",
		model : "",
		year : "",
		condition : "",
		category : "",
		bought : false
	},

	{
		// id: uuid.v4(),
		id: "",
		name : "",
		description : "",
		image : "",
		location : "",
		timeCreated : new Date(""),
		quantity : 1,
		universalCode : "",
		guarantee : new Date(""),
		brand : "",
		model : "",
		year : "",
		condition : "",
		category : "",
		bought : false
	}
];

let Users = [

	// {
	// 	id : uuid.v4(),
	// 	name : "",
	// 	lastName : "",
	// 	email : "",
	// 	password : "",
	// 	idPurchases : [],
	// 	idSales : [],
	// 	phoneNumbers : [],
	// 	directions: []
	// },

	{
		id : uuid.v4(),
		name : "Adrián",
		lastName : "García",
		email : "adriangarlop@hotmail.com",
		password : "admin",
		idPurchases : ["1", "2"],
		idSales : ["3", "4"],
		phoneNumbers : ["+52 1 (462) 107 3787"],
		directions: ["Liverpool 3010, Narvarte, Monterrey, Nuevo León", "Parque Fundidora, Monterrey, Nuevo León"]
	},

	{
		id : uuid.v4(),
		name : "Fernanda",
		lastName : "Martínez",
		email : "lucero-fmr@hotmail.com",
		password : "admin",
		idPurchases : [],
		idSales : [],
		phoneNumbers : ["+52 1 (462) 177 4394", "+52 1 (812) 112 7782"],
		directions: ["Paseo de lasa aguilas 78, León, Guanajuato"]
	},

	{
		id : uuid.v4(),
		name : "Lucero",
		lastName : "Manzanita",
		email : "martinezlucero036@gmail.com",
		password : "admin",
		idPurchases : [],
		idSales : [],
		phoneNumbers : ["+52 1 (462) 177 4394", "+52 1 (812) 112 7782"],
		directions: ["Guayabo 739, Irapuato, Guanajuato"]
	}
];

let Purchases = [
	{
		id : uuid.v4(),
		userPurchaseId : "1",
		userSaleId : "4",
		timeOfPurchase: new Date("December 17, 1995 03:24:00"),
		name : "Cafe Timhortons",
		image : "coffee.jpg",
		location : "Tecnologico de Monterrey Biblio piso 3",
		daySchedule : "Jueves",
		hourSchedule : "11:00 am"
	},

	{
		id : uuid.v4(),
		userPurchaseId : "2",
		userSaleId : "4",
		timeOfPurchase: new Date("December 17, 1995 03:24:00"),
		name : "Cafe Timhortons",
		image : "coffee.jpg",
		location : "Tecnologico de Monterrey Biblio piso 3",
		daySchedule : "Viernes",
		hourSchedule : "12:00 pm"
	},

	{
		id : uuid.v4(),
		userPurchaseId : "1",
		userSaleId : "4",
		timeOfPurchase: new Date("December 17, 1995 03:24:00"),
		name : "Iphone 12",
		image : "phone.jpg",
		location : "Parque Fundidora",
		daySchedule : "Sabado",
		hourSchedule : "6:00 pm"
	}
];

// ----------------- Users --------------------

// Get
app.get('/users', (req, res, next) => {
	return res.status(200).json(Users); 	
});

// ----------------- Purchases ----------------

// GET
app.get('/purchases', (req, res, next) => {
	return res.status(200).json(Purchases); 	
});

// Post
app.post('/purchases' , (req, res, next) => {

	let newPurchase = {
		
	}

});

// ----------------- Products -----------------

// GET
app.get('/products', (req, res, next) => {
	return res.status(200).json(Products); 	
});

// POST
app.post('/products', jsonParser, (req, res, next) => {

	// Validate product

	let flag = true;

	// If all fields are correctly filled
	// if (req.body.title && req.body.descriptionText && req.body.quantity 
	// 		&& req.body.category) {

		// Create the new post
		let createdProduct = {
			id : uuid.v4(),
			userId : "1",
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
			category : req.body.category,
			bought : req.body.bought
		};

		Products.push(createdProduct);

		res.statusMessage = "Product was posted";
		return res.status(200).json(createdProduct);
	// }

	return res.status(406).json({
		code: 406,
		message: "Missing field in body"
	});

});

app.listen('8080', () => {
	console.log("Donago-go on port 8080");
});