const express = require('express');
const router = express.Router();

const database = require('../helpers/database');
const renderer = require('../helpers/renderer');
const analytics = require('../helpers/analytics');
const SendMail = require('../helpers/mail');

const trackPageView = (req, name, title) => {
  analytics.page({
    anonymousId: req.session.anonymousId,
    //userId: '',
    category: 'events',
    name: name,
    properties: {
      url: req.originalUrl,
      //path: '/docs/libraries/node/',
      title: title,
      referrer: req.referrer
    }
  });
};

router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next()
});

router.get('/:title\.json', async (req, res) => {
  const event = await database.select( 'events', { title: req.param('title') } );
  trackPageView(req, 'AKAI Events API', event[0].title);
  if(event[0]) {
    res.send(event[0]);
  } else {
    res.send('');
  }
});

router.get('/:title', async (req, res) => {
  const event = await database.select( 'events', { title: req.param('title') } );
  trackPageView(req, 'AKAI Events', event[0].title);
  if(event[0]) {
    res.send(renderer.renderPage(event[0]));
  } else {
    res.send('');
  }
});

router.post('/:title', function (req, res) {
  const result = SendMail(
    {
      from: `"${req.body.name}" <${req.body.from}>`,
      subject: `${req.body.subject} - Formularz kontaktowy AKAI`, // Subject line
      text: `
        ${req.body.text}
        ---
        Wiadomość wysłana przez formularz na event.akai.org.pl/event/${req.params.title},
      `
    }
  );
  res.send(result);
});

module.exports = router;