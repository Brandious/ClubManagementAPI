const db = require('../models');
const Events = db.events;

exports.createEvent = async (req, res) => {

    try
    {
         const {userId, name, opis, datum_izvodjenja } = req.body;
    
         const events = await Events.create({
             name:name,
             opis: opis,
             datum_izvodjenja: datum_izvodjenja,
             userId: userId
         });

         res.status(200).send(events);
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

exports.getEvents = async (req, res) => {

    try
    {     
       
         //const { userId } = req || req.body;
         const events = await Events.findAll({});

         res.status(200).send(events);
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

exports.deleteEvents = async (req, res) => {

    try
    {
        
         const { eventId } =  req.body;
       
         const events = await Events.destroy({where: {id: eventId}})

         return res.status(204).send(events);
    }
    catch(err)
    {
        console.log(err);
        return res.status(403).send(err);
    }

   
}

exports.updateEvent = async (req, res) => {

    try
    {
        const {eventId, name, opis, datum_izvodjenja } = req.body;
    
         const events = await Events.update({name, opis, datum_izvodjenja},{where: {id: eventId}})
         return res.status(200).send(events);
    }
    catch(err)
    {
        console.log(err);
        return res.status(403).send(err);
    }

   
}