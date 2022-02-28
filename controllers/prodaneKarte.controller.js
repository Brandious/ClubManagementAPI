const db = require('../models');
const ProdaneKarte = db.prodaneKarte;
const Karta = db.karta;
const Rezervacija = db.rezervacija;
const Cijena = db.cijena;
const User = db.user;

exports.prodajKartu = async (req, res) => {

    try
    {
         const { kartaId, userId, cijenaKarte,brojKarti,rezervacija, email } = req.body;
            

        console.log(req.body);

         const prodanekarte = await ProdaneKarte.create({
             prodaneKarteId: kartaId,
             trgovacId: userId,
             cijenaKarteId: cijenaKarte,
            //  rezervacijaStolaId: rezervacija,
             email: email,
         });

         res.status(200).send(prodanekarte);
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

exports.getProdaneKarte = async (req, res) => {

    try
    {     
         const { eventId } =  req.query || req.body;
       

        const nadjiEvent = await Karta.findOne({where: {eventId: eventId}});

         const prodanekarte = await ProdaneKarte.findAll({where: {
                prodaneKarteId: nadjiEvent.id


         }, include:[{model: Karta, as: "prodaneKarte"}, {model: Rezervacija, as: "rezervacijaStola"}, {model: Cijena, as: "cijenaKarte"},{model: User, as: "trgovac"}]});

         res.status(200).send(prodanekarte);
    }
    catch(err)
    {
        console.log(err);
        res.status(403).send(err);
    }

   
}

exports.deleteKartu = async (req, res) => {

    try
    {
        
         const { prodanekarteId } =  req.body;
       
         const prodanekarte = await ProdaneKarte.destroy({where: {id: prodanekarteId}})

         return res.status(204).send(prodanekarte);
    }
    catch(err)
    {
        console.log(err);
        return res.status(403).send(err);
    }

   
}

exports.updateKartu = async (req, res) => {

    try
    {
        const { prodanekarteId, napomena, stoId } = req.body;
        
         const prodanekarte = await ProdaneKarte.update({  
             stoId: stoId,
             napomena: napomena,
             userId: userId
        },{where: {id: prodanekarteId}})
         return res.status(200).send(prodanekarte);
    }
    catch(err)
    {
        console.log(err);
        return res.status(403).send(err);
    }

   
}