const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const { UnauthorizedError } = require("../utils/errors");


const jwtFrom = ({ headers }) => {
  if (headers?.authorization) {
    
    const [scheme, token] = headers.authorization.split(" ");

    if (scheme.trim() === "Bearer") {
      return token;
    }
  }
  return undefined;
};


const extractUserFromJwt = (req, res, next) => {

  console.log('EXECUTING extractUserFromJwt');

  try {
    const token = jwtFrom(req);
    console.log('token',token);
    
   
    if (token) {
      res.locals.user = jwt.verify(token, SECRET_KEY);
      
    }
    return next();
  } catch (err) {
    next(err);
  }
};


const requireAuthenticatedUser = (req, res, next) => {
  try {

    const { user } = res.locals;

    if (!user?.email) {
      throw new UnauthorizedError();
    }
    next();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  extractUserFromJwt,
  requireAuthenticatedUser,
};