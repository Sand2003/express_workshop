const jwt =require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "debugkey");
        req.user = decoded;
        next();
        //mandará a llamar la siguiente función/ruta
    }
    catch (error) {
        return res.status(401).json({code: 401, message: "No tienes permiso"});
    }
}