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



exports.batchCreateArtikal = async (req, res) => {

    try
    {
         const {userId, artikli, sankId } = req.body;
         

         const creation = artikli.map(async(el) => {
                
            const artikal = await Artikal.create({
                naziv: el.naziv,
                mjerna_jedinica: el.mjer_jed,
                redni_broj: el.redni_broj,
                userId: userId,
                skladisteId: sankId
            });

            const stanjeArtikla = await StanjeArtikla.create({
                kolicinaUKnjigovodstvu: el.popisanoKnjigovodstvo,
                artikalId: artikal.id,
                dogadjajId: el.eventId
             })

             return({artikal, stanjeArtikla})
         });
        
         res.status(200).send({...creation});
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


exports.batchUpdateArtikal = async (req, res) => {

    try
    {
        const {sankerId, artikli } = req.body;
        

        const update = artikli.map(async (el) => await StanjeArtikla.update({ popisanaKolicina: el.popisana_kolicina },{where: {artikalId: el.artikalId}}));

        // const artikal = await StanjeArtikla.update({ popisanaKolicina: popisana_kolicina },{where: {artikalId: artikalId}});

         return res.status(200).send({update});
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