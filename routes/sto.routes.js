const { authJwt } = require('../middleware');
const controller = require('../controllers/sto.controller');

module.exports = (app) => {
    app.use((req, res, next) => {

        res.header('Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-type, Accept ');
        next();
    })

  app.post(
    "/api/Sto",
    [authJwt.verifyToken],
    controller.createSto
  );

  app.get(
    "/api/Sto",
    [authJwt.verifyToken],
    controller.getSto
  );

  app.delete(
    "/api/Sto",
    [authJwt.verifyToken],
    controller.deleteSto
  );

  app.patch(
    "/api/Sto",
    [authJwt.verifyToken],
    controller.updateSto
  );

}