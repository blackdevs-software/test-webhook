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
  const data = req.body;
  console.log(data);
  const { repository, pusher, organization, sender, compare, commits, head_commit } = data;
  
  const commitTemplate = `commit feito no repo ${repository.full_name} com owner ${repository.owner.name}, com imagem URL ${repository.owner.avatar_url}, feito pelo usuario ${head_commit.author.name} onde adicionou ${head_commit.added.length} arquivos, removeu ${head_commit.removed.length} arquivos e modificou ${head_commit.modified.length} arquivos`;
  console.log(commitTemplate);

  res.status(200).json({'status': 'ok'})
})

app.listen(port, host, () => {
  console.info(`Server listening on ${host}:${port}`);
});
