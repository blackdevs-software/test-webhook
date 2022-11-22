const express = require('express')
const bodyParser = require('body-parser');

const router = express.Router();
const app = express();

const port = process.env.API_PORT || 5050;
const host = process.env.API_HOST || '0.0.0.0';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', router);

router.post('/webhooks', (req, res) => {
  console.log(req.body);
  res.status(200).json({'status': 'ok'})
})

app.listen(port, host, () => {
  console.info(`Server listening on ${host}:${port}`);
});
