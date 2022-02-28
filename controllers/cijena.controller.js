const db = require('../models');
const Cijena = db.cijena;

exports.createCijena = async (req, res) => {

    try
    {
         const {naziv, price_eur, price_kuna, eventId } = req.body;
    
         const cijena = await Cijena.create({
             naziv: naziv,
             price_eur: price_eur,
             price_kuna: price_kuna,
             eventId: eventId,
           
         });

         res.status(200).send(cijena);
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

exports.getCijena = async (req, res) => {

    try
    {     
       
         //const { userId } = req || req.body;
         const cijena = await Cijena.findAll({});

         res.status(200).send(cijena);
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

exports.deleteCijena = async (req, res) => {

    try
    {
        
         const { cijenaId } =  req.body;
       
         const cijena = await Cijena.destroy({where: {id: cijenaId}})

         return res.status(204).send(cijena);
    }
    catch(err)
    {
        console.log(err);
        return res.status(403).send(err);
    }

   
}

exports.updateCijena = async (req, res) => {

    try
    {
        const {cijenaId, ticketId, naziv, price_eur, price_kuna } = req.body;
    
         const cijena = await Cijena.update({  naziv: naziv,
            price_eur: price_eur,
            price_kuna: price_kuna,
            ticketId: ticketId},{where: {id: cijenaId}})
         
            return res.status(200).send(cijena);
    }
    catch(err)
    {
        console.log(err);
        return res.status(403).send(err);
    }

   
}