const jwt = require('jsonwebtoken');

const jwtmiddleware= (req,res,next) => {
    
    // Extract the Jwt token from the request headers
    const token = req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json({error:'Unauthorized'});

    try {
        //verify the JWT Token
       const decoded =  jwt.verify(token,process.env.JWT_SECRET);

        //Attach user information to the request object 
        req.userPayload= decoded;
        next(); 
    } catch (error) {
        console.error(error);
        res.status(401).json({error:'Invalid token'});
    }

}
module.exports= jwtmiddleware;
