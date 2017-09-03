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
	state: String,
	tags: [String] 
});

/*
applicantSchema.pre('save', function(next){
	
	
	// TODO make more resilient so slugs are unique
});
*/
module.exports = mongoose.model('Applicant', applicantSchema);