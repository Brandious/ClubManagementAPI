const db = require('../models');

const Sto = db.sto;
const Potrosnja = db.potrosnja;
const { Op } = require("sequelize");

exports.handleCreateRaspored = async (req, res) => {

    try
    {
         const {userId, stolovi } = req.body;
        
    const response = stolovi.map(async (el) => {
    
            console.log(el);
        const potrosnja = await Potrosnja.create({
            naziv: el.PotrosnjaStola,
            price_eur: parseFloat(el.CijenaEur),
            price_kuna: parseFloat(el.CijenaKuna),
            
        });
 


         const sto = await Sto.create({
             naziv: el.NazivStola,
             kategorija: el.KategorijaStola,
             x: el.x,
             y: el.y,
             eventId: el.eventId,
             potrosnjaId: potrosnja.id
         });
        
       

            return ({sto, potrosnja})
    
    })
        res.status(200).send(response);
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

exports.getRaspored = async (req, res) => {

    try
    {     
        
         const { userId, eventId } = req.body;
         const sto = await Sto.findAll({include:[{model: Potrosnja, as: "potrosnja"}]});

         res.status(200).send({sto}); 
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

// exports.getUpcomingEvents = async (req, res) => {

//     try
//     {     
        
//          //const { userId, eventId } = req.body;
//          const events = await Events.findAll({ where: {
//             datum_izvodjenja: {
//               [Op.gt]: new Date(),
//             }},
//          include:[{model: Karta, as: "karte"}, {model: Cijena, as: "event_id"}]});

//          res.status(200).send({events});
//     }
//     catch(err)
//     {
//         console.log(err);
//         res.status(403).send(err);
//     }

   
// }

// exports.getPastEvents = async (req, res) => {

//     try
//     {     
        
//          //const { userId, eventId } = req.body;
//          const events = await Events.findAll({ where: {
//             datum_izvodjenja: {
//               [Op.lt]: new Date(),
//             }},
//          include:[{model: Karta, as: "karte"}, {model: Cijena, as: "event_id"}]});

//          res.status(200).send({events});
//     }
//     catch(err)
//     {
//         console.log(err);
//         res.status(403).send(err);
//     }

   
// }


// exports.deleteEvents = async (req, res) => {

//     try
//     {
        
//          const { eventId } =  req.body;
       
//          const events = await Events.destroy({where: {id: eventId}})

//          return res.status(204).send(events);
//     }
//     catch(err)
//     {
//         console.log(err);
//         return res.status(403).send(err);
//     }

   
// }

// exports.updateEvent = async (req, res) => {

//     try
//     {
//         const {eventId, name, opis, datum_izvodjenja } = req.body;
    
//          const events = await Events.update({name, opis, datum_izvodjenja},{where: {id: eventId}})
//          return res.status(200).send(events);
//     }
//     catch(err)
//     {
//         console.log(err);
//         return res.status(403).send(err);
//     }

   
// }