const db = require('../models');
const Sto = db.sto;

exports.createSto = async (req, res) => {

    try
    {
         const { naziv, kategorija,x ,y } = req.body;
    
         const sto = await Sto.create({
             naziv: naziv,
             kategorija: kategorija,
             x: x,
             y: y
        });

         res.status(200).send(sto);
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

exports.getSto = async (req, res) => {

    try
    {     
       
         const { userId, eventId } = req || req.body;
         const sto = await Sto.findAll({where: {eventId: eventId}});

         res.status(200).send(sto);
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

exports.deleteSto = async (req, res) => {

    try
    {
        
         const { StoId } =  req.body;
       
         const sto = await Sto.destroy({where: {id: StoId}})

         return res.status(204).send(sto);
    }
    catch(err)
    {
        console.log(err);
        return res.status(403).send(err);
    }

   
}

exports.updateSto = async (req, res) => {

    try
    {
        const {StoId, naziv, kategorija } = req.body;
    
         const sto = await Sto.update({ 
            naziv: naziv,
            kategorija: kategorija
        },{where: {id: StoId}})
         
            return res.status(200).send(sto);
    }
    catch(err)
    {
        console.log(err);
        return res.status(403).send(err);
    }

   
}