exports.homePage = (req, res) => {
	res.render('index');
}
exports.addApplicant = (req, res) => {
	res.render('editApplicant', { title: 'Apply now'});
}
exports.createApplicant = (req, res) => {
	console.log(req.body);
	res.json(req.body);
}