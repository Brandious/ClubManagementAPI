const { authJwt } = require('../middleware');
const controller = require('../controllers/potrosnja.controller');

module.exports = (app) => {
    app.use((req, res, next) => {

        res.header('Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-type, Accept ');
        next();
    })

  app.post(
    "/api/Potrosnja",
    [authJwt.verifyToken],
    controller.createPotrosnja
  );

  app.get(
    "/api/Potrosnja",
    [authJwt.verifyToken],
    controller.getPotrosnja
  );

  app.delete(
    "/api/Potrosnja",
    [authJwt.verifyToken],
    controller.deletePotrosnja
  );

  app.patch(
    "/api/Potrosnja",
    [authJwt.verifyToken],
    controller.updatePotrosnja
  );

}