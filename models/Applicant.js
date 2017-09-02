const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const applicantSchema = new mongoose.Schema({
	firstName: String,
	middleName: String,
	lastName: String,
	contactPhone: Number,
	email: String,
	address: String,
	zip: Number,
	city: String,
	state: String 
});
