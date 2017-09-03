const mongoose = require('mongoose');
const Applicant = mongoose.model('Applicant');

exports.homePage = (req, res) => {
	res.render('index');
}
exports.addApplicant = (req, res) => {
	res.render('editApplicant', { title: 'Apply now'});
}
exports.createApplicant = async (req, res) => {
	const applicant = new Applicant(req.body);
	await applicant.save();
	req.flash('success', "Congrats, you don't suck!");
	res.redirect('/');
}