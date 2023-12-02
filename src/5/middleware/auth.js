const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	const token = req.header('x-auth-token');

	if (!token) {
		return res.status(401).json({ msg: 'Token mancante, autorizzazione negata' });
	}

	try {
		const decoded = jwt.verify(token, 'your-secret-key');
		req.user = decoded.user;
		next();
	} catch (error) {
		res.status(401).json({ msg: 'Token non valido' });
	}
};