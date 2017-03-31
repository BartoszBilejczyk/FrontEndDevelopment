require('dotenv').config({ silent: true });

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const http = require('http');
const moment = require('moment-timezone');
moment.tz.setDefault('UTC');
const serialize = require('serialize-javascript');

app.use('/public', express.static(path.join(__dirname, 'public')));

// these are on the server now
let events = [
  { description: 'Do laundry', date: moment('2017-03-03', 'YYYY-MM-DD') },
  { description: 'Meeting with CEO', date: moment('2017-04-03', 'YYYY-MM-DD') },
  { description: `Standup in Jack's Cinema`, date: moment('2017-02-03', 'YYYY-MM-DD') }
]

app.get('/', (req, res) => {
  let template = fs.readFileSync(path.resolve('./index.html'), 'utf-8');
  let contentMarker = '<!--APP-->';
  // it is parsed to index.html (serialized) and available
  res.send(template.replace(contentMarker, `<script>var __INITIAL_STATE__ = ${serialize(events)}</script>`));

});

// this is used to pass the event as json object
app.use(require('body-parser').json());

// first argument is path, second is where we handle our event
app.post('/add_event', (req, res) => {
  //to be able to send data back to the browser
  events.push(req.body)
  res.sendStatus(200)
});




const server = http.createServer(app);

if (process.env.NODE_ENV === 'development') {
  const reload = require('reload');
  const reloadServer = reload(server, app);
  require('./webpack-dev-middleware').init(app);
  require('./webpack-server-compiler').init(function(bundle) {
    console.log('Node bundle built')
  });
}

server.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
  if (process.env.NODE_ENV === 'development') {
    require("open")(`http://localhost:${process.env.PORT}`);
  }
});
