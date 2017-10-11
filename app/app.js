const express = require('express');
const app = express();

const Events = require('./events');
let events = {};
let updatedAt;

const updateEvents = () => {
  if ( !updatedAt || (updatedAt - new Date > 60000) ) {
    Events.get().then( data => events = data );
    updatedAt = new Date;
  }
};

const renderPage = (page) => {
  if (!page) {
    return renderPage( {
      title: "Strona nie została znaleziona",
      components: []
    } );
  }

  const pageRenderer = require('akai-onepage/src/js/pageRenderer');
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>${ page.title }</title>
      <link href="assets/main.css" rel="stylesheet"></head>
      <body>
        ${ pageRenderer.render( page ) }
      </body>
    </html>
  `;
};

app.use('/assets', express.static('node_modules/akai-onepage/build/assets'));
app.use('/img', express.static('node_modules/akai-assets'));

app.use(function (req, res, next) {
  updateEvents();
  next();
});

app.get('/:event', function (req, res) {
  const page = events[req.params.event];
  res.send( renderPage(page) );
});

app.get('/', function (req, res) {
  const page = events[req.params.event];
  res.send( renderPage(page) );
});

app.listen(3003, function () {
  updateEvents();
  console.log('Example app listening on port 3003!')
});