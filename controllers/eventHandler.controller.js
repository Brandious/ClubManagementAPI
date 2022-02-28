const db = require('../models');
const Events = db.events;
const Karta = db.karta;
const Skladiste = db.skladiste;
const Cijena = db.cijena;
const { Op } = require("sequelize");

exports.handleCreateEvent = async (req, res) => {

    try
    {
         const {userId, name, opis, datum_izvodjenja, prices, brojGostiju, stanje_u_kunama } = req.body;
         const { file } =  req;
        
    
         const event = await Events.create({
             name:name,
             opis: opis,
             datum_izvodjenja: datum_izvodjenja,
             userId: userId
         });
        
         const karta = await Karta.create({
            eventId: event.id,
            grafika: file.buffer,
        });
 

        const price = prices?.map(async(el) => {
            return await Cijena.create({
                eventId: event.id,
                naziv: el.naziv,
                price_eur: el.price_eur,
                price_kuna: el.price_kuna,
                kategorija: el.kategorija
            })
        })

        const skladiste = await Skladiste.create({
            stanje_u_kunama: stanje_u_kunama,
            userId: userId,
            eventId: event.id
        });

        res.status(200).send({event, karta,price, skladiste});
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
        
         //const { userId, eventId } = req.body;
         const events = await Events.findAll({include:[{model: Karta, as: "karte"}, {model: Cijena, as: "event_id"}]});

         res.status(200).send({events});
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

exports.getUpcomingEvents = async (req, res) => {

    try
    {     
        
         //const { userId, eventId } = req.body;
         const events = await Events.findAll({ where: {
            datum_izvodjenja: {
              [Op.gt]: new Date(),
            }},
         include:[{model: Karta, as: "karte"}, {model: Cijena, as: "event_id"}]});

         res.status(200).send({events});
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

exports.getPastEvents = async (req, res) => {

    try
    {     
        
         //const { userId, eventId } = req.body;
         const events = await Events.findAll({ where: {
            datum_izvodjenja: {
              [Op.lt]: new Date(),
            }},
         include:[{model: Karta, as: "karte"}, {model: Cijena, as: "event_id"}]});

         res.status(200).send({events});
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