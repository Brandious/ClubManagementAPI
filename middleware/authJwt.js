const jwt = require('jsonwebtoken');
const config = require('../config/auth.config.js');
const db = require('../models');
const User = db.user;

verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token'];

    if(!token)
      return res.status(403).send({message: 'No token provided'});

    jwt.verify(token, config.secret, (err, decoded) => {
        if(err) return res.status(401).send({
            message: 'Unauthorized!'
        })

        req.userId = decoded.id;
        next();
    })
}

isAdmin = async(req, res, next) => {

    try
    {
        const user = await User.findByPk(req.userId);
        const roles = await user.getRoles();

        roles.map(role => role.dataValues.name === 'Admin' && next());

        res.status(403).send({message: 'Not Admin...'});
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send({message: err});
    }

   

}

isStaff = async(req, res, next) => {

    try
    {
        const user = await User.findByPk(req.userId);
        const roles = await user.getRoles();
     
        roles.map(role => role.dataValues.name === 'Staff' && next());

        return res.status(403).send({message: 'Not Staff...'});
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send({message: err});
    
    }



}


isManagement = async(req, res, next) => {

    try
    {

     
        const user = await User.findByPk(req.userId);
        const roles = await user.getRoles();
        
        roles.map(role => role.dataValues.name === 'Management'  ? next(): res.status(403).send({message: 'Not management...'}));
    }
    catch(err)
    {
        console.log(err);
        res.send({message: err});
    
    }

  

}

const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
    isManagement: isManagement,
    isStaff: isStaff
  };
  
  module.exports = authJwt;