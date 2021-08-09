const jwt = require("jsonwebtoken");
const {jwtSecret} = require("../config/config");

module.exports = (req, res, next) => {
    if (req.method === "OPTIONS") {
        return next();
    }

    try {
        const token = req.headers.authorization.split(" ")[1];
        
        if (!token) {
            res.status(401).json({message: "вы не авторизованы"})
        }

        const decode = jwt.verify(token, jwtSecret);
        
        req.user = decode;
        
        next();

    } catch (e) {
        res.status(401).json({message: e.message})
    }
}