// index.js
const express = require('express');
const rendertronMiddleware = require('rendertron-middleware');
const app = express();
const botUserAgents = [
  'Baiduspider',
  'bingbot',
  'Embedly',
  'facebookexternalhit',
  'LinkedInBot',
  'outbrain',
  'pinterest',
  'quora link preview',
  'rogerbot',
  'showyoubot',
  'Slackbot',
  'TelegramBot',
  'Twitterbot',
  'vkShare',
  'W3C_Validator',
  'WhatsApp',
  'googlebot',
];

app.use(
  rendertronMiddleware.makeMiddleware({
    proxyUrl: `http://localhost:3032/render/`, // rendertron address with a /render/ suffix
    timeout: 60 * 1000,
    userAgentPattern: new RegExp(botUserAgents.join('|'), 'i')
  })
);
app.use(express.static('build'));

const port = process.env.PORT || 3000;
app.listen(port, err => {
  if (err) {
    console.error('failed to start server.');
    return;
  }
  console.log(`server started at http://localhost:${port}/`);
});

