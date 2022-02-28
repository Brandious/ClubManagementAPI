const { authJwt } = require('../middleware');
const controller = require('../controllers/event.controller');

module.exports = (app) => {
    app.use((req, res, next) => {

        res.header('Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-type, Accept ');
        next();
    })

  app.post(
    "/api/event",
    [authJwt.verifyToken],
    controller.createEvent
  );

  app.get(
    "/api/event",
    [authJwt.verifyToken],
    controller.getEvents
  );

  app.delete(
    "/api/event",
    [authJwt.verifyToken],
    controller.deleteEvents
  );

  app.patch(
    "/api/event",
    [authJwt.verifyToken],
    controller.updateEvent
  );

}