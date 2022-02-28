const { authJwt } = require('../middleware');
const controller = require('../controllers/eventHandler.controller');
const upload = require('../utils/upload');

module.exports = (app) => {
    app.use((req, res, next) => {

        res.header('Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-type, Accept ');
        next();
    })

  app.post(
    "/api/createEvent",
    [authJwt.verifyToken],
    upload.single('file'),
    controller.handleCreateEvent
  );

  app.get(
    "/api/getEvents",
    [authJwt.verifyToken],
    controller.getEvents
  );

  app.get(
    "/api/upcoming",
    [authJwt.verifyToken],
    controller.getUpcomingEvents
  );
  
  app.get(
    "/api/past",
    [authJwt.verifyToken],
    controller.getPastEvents
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