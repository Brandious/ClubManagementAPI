const { authJwt } = require('../middleware');
const controller = require('../controllers/rezervacija.controller');

module.exports = (app) => {
    app.use((req, res, next) => {

        res.header('Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-type, Accept ');
        next();
    })

  app.post(
    "/api/Rezervacija",
    [authJwt.verifyToken],
    controller.createRezervacija
  );

  app.get(
    "/api/Rezervacija",
    [authJwt.verifyToken],
    controller.getRezervacija
  );

  app.delete(
    "/api/Rezervacija",
    [authJwt.verifyToken],
    controller.deleteRezervacija
  );

  app.patch(
    "/api/Rezervacija",
    [authJwt.verifyToken],
    controller.updateRezervacija
  );

}