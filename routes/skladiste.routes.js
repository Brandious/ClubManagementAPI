const { authJwt } = require('../middleware');
const controller = require('../controllers/skladiste.controller');

module.exports = (app) => {
    app.use((req, res, next) => {

        res.header('Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-type, Accept ');
        next();
    })

  app.post(
    "/api/Skladiste",
    [authJwt.verifyToken],
    controller.createSkladiste
  );

  app.get(
    "/api/Skladiste",
    [authJwt.verifyToken],
    controller.getSkladiste
  );

  app.delete(
    "/api/Skladiste",
    [authJwt.verifyToken],
    controller.deleteSkladiste
  );

  app.patch(
    "/api/Skladiste",
    [authJwt.verifyToken],
    controller.updateSkladiste
  );

}