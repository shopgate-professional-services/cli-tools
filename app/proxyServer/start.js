const expressProxy = require('express-http-proxy');
const express = require('express');
const bodyParser = require('body-parser');

const RAPID_SANDBOX = 'https://sgxs-rapid2-sandbox.shopgate.services/';
const RAPID_LIVE = 'https://sgxs-rapid2-prod.shopgate.services/';
const PORT_DEFAULT = '9090';

function start({ prod = false }) {
  const app = express();

  const rapidUrl = prod ? RAPID_LIVE : RAPID_SANDBOX;
  app.use(bodyParser.json());

  console.log(`==== CONNECTING TO ${rapidUrl} ====`);
  app.use(expressProxy(rapidUrl, {
    filter: (req) => {
      console.warn('========= REQUEST HEADERS ========');
      console.log(req.headers);
      console.warn('========= REQUEST BODY ========');
      console.log(req.body);
      console.warn('========= END ============= \n\n\n');

      return true;
    },
    userResDecorator: (proxyRes, proxyResData) => {
      console.warn('========= RESPONSE BODY ========');
      console.log(JSON.parse(proxyResData.toString()));
      if (JSON.parse(proxyResData.toString()).cmds) {
        JSON.parse(proxyResData.toString()).cmds.forEach(c => console.warn(c))
      }
      return proxyResData;
    }
  }));

  const port = PORT_DEFAULT;
  app.listen(port, () => {
    console.log(`Proxy is listening on port: ${port}`)
  });
}

module.exports = start;
