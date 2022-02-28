const db = require('../models');
const Artikal = db.artikal;
const StanjeArtikla = db.stanjeArtikla;
const Event = db.events;

exports.createArtikal = async (req, res) => {

    try
    {
         const {userId,redni_broj,  naziv, mjer_jed, popisanoKnjigovodstvo, eventId } = req.body;
    
         const artikal = await Artikal.create({
             naziv: naziv,
             mjerna_jedinica: mjer_jed,
             redni_broj: redni_broj,
             userId: userId
         });

         
         const stanjeArtikla = await StanjeArtikla.create({
            kolicinaUKnjigovodstvu: popisanoKnjigovodstvo,
            artikalId: artikal.id,
            dogadjajId: eventId
         })

         res.status(200).send({artikal, stanjeArtikla});
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

exports.getArtikal = async (req, res) => {

    try
    {     
       
         //const { userId } = req || req.body;
         const artikal = await Artikal.findAll({});

         res.status(200).send(artikal);
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

exports.deleteArtikal = async (req, res) => {

    try
    {
        
         const { artikalId } =  req.body;
       
         const artikal = await Artikal.destroy({where: {id: artikalId}})

         return res.status(204).send(artikal);
    }
    catch(err)
    {
        console.log(err);
        return res.status(403).send(err);
    }

   
}

exports.updateArtikal = async (req, res) => {

    try
    {
        const {artikalId, popisana_kolicina, kolicinaUKnjigovodstvu, userId, dogadjajId } = req.body;
  
        const artikal = await StanjeArtikla.update({ popisanaKolicina: popisana_kolicina },{where: {artikalId: artikalId}});

         return res.status(200).send(artikal);
    }
    catch(err)
    {
        
        return res.status(403).send(err);
    }

   
}

exports.getStanjeArtikla = async (req, res) => {

    try
    {
       
    
         const artikal = await StanjeArtikla.findAll({include: [{model: Artikal, as: 'artikal'}, {model: Event, as: 'dogadjaj'}]});
        
         return res.status(200).send(artikal);
    }
    catch(err)
    {
        console.log(err);
        return res.status(403).send(err);
    }

   
}