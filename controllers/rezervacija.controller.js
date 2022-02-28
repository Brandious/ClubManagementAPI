const db = require('../models');
const Rezervacija = db.rezervacija;

exports.createRezervacija = async (req, res) => {

    try
    {
         const { userId, napomena, stoId,eventId } = req.body;
     

         const rezervacija = await Rezervacija.create({
             stoId: stoId,
             napomena: napomena,
             userId: userId,
             eventId: eventId
         });

         res.status(200).send(rezervacija);
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

exports.getRezervacija = async (req, res) => {

    try
    {     
       
         //const { userId } = req || req.body;
         const rezervacija = await Rezervacija.findAll({});

         res.status(200).send(rezervacija);
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

exports.deleteRezervacija = async (req, res) => {

    try
    {
        
         const { rezervacijaId } =  req.body;
       
         const rezervacija = await Rezervacija.destroy({where: {id: rezervacijaId}})

         return res.status(204).send(rezervacija);
    }
    catch(err)
    {
        console.log(err);
        return res.status(403).send(err);
    }

   
}

exports.updateRezervacija = async (req, res) => {

    try
    {
        const { rezervacijaId, napomena, stoId } = req.body;
        
         const rezervacija = await Rezervacija.update({  
             stoId: stoId,
             napomena: napomena,
             userId: userId
        },{where: {id: rezervacijaId}})
         return res.status(200).send(rezervacija);
    }
    catch(err)
    {
        console.log(err);
        return res.status(403).send(err);
    }

   
}