const secretkey = 'shhhhh'
const jwt = require('jsonwebtoken');

const authjwt = (req, res, next) => {
    console.log('in middle ware----');
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        try {
            let decoded = jwt.verify(token, secretkey)
            console.log(decoded);
            req.auth = decoded;
            next()
        } catch (err) {
            res.json({
                status: false,
                message: 'Forbidden'
            })
        }
    } else {
        res.json({
            status: false,
            message: 'Forbidden'
        })
    }
};

module.exports = { authjwt }

