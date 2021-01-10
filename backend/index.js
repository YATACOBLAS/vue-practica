const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const morgan = require('morgan');
const api = require('./routes/api')
const pets = require('./mock')
const path = require('path');
const app = express()

// //nuxt
// const { Nuxt, Builder } = require('nuxt');

// const config = require('../nuxt.config.js')
// const nuxt = new Nuxt(config)
// app.use(nuxt.render)

// Build only in dev mode
// if (config.dev) {
//     new Builder(nuxt).build()
//   }
// Listen the server

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', api);
app.use(morgan('dev'));
app.use('/public', express.static(path.join(__dirname, 'public')));

module.exports = app

mongoose.connect('mongodb://localhost:27017/pets', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error'))
db.once('open', () => {
    if (require.main === module) {
        
        app.listen((process.env.PORT || 9000), () => {
          console.log(`API server listening on port 9000`)
        })
      }
    const petCollection = db.collection('pets')
    petCollection.estimatedDocumentCount((err, count) => {
        if (count) return
        petCollection.insertMany(pets)
    })
})
