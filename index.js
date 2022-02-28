const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const db = require('./models');

db.sequelize.sync();


const corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.get('/', (req, res) => {
    res.json({message: 'helloWorld'});
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/event.routes')(app);
require('./routes/skladiste.routes')(app);
require('./routes/artikal.routes')(app);
require('./routes/karta.routes')(app);
require('./routes/rezervacija.routes')(app);
require('./routes/cijena.routes')(app);
require('./routes/sto.routes')(app);
require('./routes/potrosnja.routes')(app);
require('./routes/prodaneKarte.routes')(app);

require('./routes/eventHandler.routes')(app);
require('./routes/raspored.routes')(app);

const PORT = process.env.PORT ||  3002;


app.listen(PORT, () => {
    console.log('Server is running ' + PORT);
})

