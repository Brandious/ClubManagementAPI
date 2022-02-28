const db = require('../models');
const Karta = db.karta;
const Event = db.events;

exports.buyKarta = async (req, res) => {

    try
    {
         const { userId, eventId, broj_karata, email, rezervacija } = req.body;

         const karta = await Event.getKarta({where: {eventId}});

         const buyKarta = await Karta.create({
             eventId: eventId,
             karta: karta.id,
             userId: userId
         });

         res.status(200).send(karta);
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

exports.getKarta = async (req, res) => {

    try
    {     
       
         //const { userId } = req || req.body;
         const karta = await Karta.findAll({});

         res.status(200).send(karta);
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}
