const db = require('../models');
const Skladiste = db.skladiste;

exports.createSkladiste = async (req, res) => {

    try
    {
         const {userId, stanje_u_kunama } = req.body;
    
         const skladiste = await Skladiste.create({
             stanje_u_kunama: stanje_u_kunama,
             userId: userId
         });

         res.status(200).send(skladiste);
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

exports.getSkladiste = async (req, res) => {

    try
    {     
       
         //const { userId } = req || req.body;
         const skladiste = await Skladiste.findAll({});

         res.status(200).send(skladiste);
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

exports.deleteSkladiste = async (req, res) => {

    try
    {
        
         const { skladisteId } =  req.body;
       
         const skladiste = await Skladiste.destroy({where: {id: skladisteId}})

         return res.status(204).send(skladiste);
    }
    catch(err)
    {
        console.log(err);
        return res.status(403).send(err);
    }

   
}

exports.updateSkladiste = async (req, res) => {

    try
    {
        const {skladisteId, stanje_u_kunama } = req.body;
    
         const skladiste = await Skladiste.update({stanje_u_kunama},{where: {id: skladisteId}})
         return res.status(200).send(skladiste);
    }
    catch(err)
    {
        console.log(err);
        return res.status(403).send(err);
    }
 
   
}