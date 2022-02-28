const db = require('../models');
const Karta = db.karta;

exports.createKarta = async (req, res) => {

    try
    {
         const { userId, eventId } = req.body;
         const { file } = req;

         const karta = await Karta.create({
             eventId: eventId,
             grafika: file.buffer
         });

         res.status(200).send(karta);
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

exports.getKarte = async (req, res) => {

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

exports.deleteKarta = async (req, res) => {

    try
    {
        
         const { kartaId } =  req.body;
       
         const karta = await Karta.destroy({where: {id: kartaId}})

         return res.status(204).send(karta);
    }
    catch(err)
    {
        console.log(err);
        return res.status(403).send(err);
    }

   
}

exports.updateKarta = async (req, res) => {

    try
    {
        const { kartaId } = req.body;
        const { file } = req;

         const karta = await Karta.update({grafika: file},{where: {id: kartaId}})
         return res.status(200).send(karta);
    }
    catch(err)
    {
        console.log(err);
        return res.status(403).send(err);
    }

   
}