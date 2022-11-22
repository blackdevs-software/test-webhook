# Github Webhooks

```bash
# start local API to receive webhooks on port 5050
yarn install
node main.js

# using gh cli to forward events
export GITHUB_TOKEN=''

gh auth login --hostname github.com --with-token < <(echo "$GITHUB_TOKEN")
gh auth status --hostname github.com

gh extension list
gh extension install cli/gh-webhook

# forwarding locally the webhooks
gh webhook forward --repo=juliocesarscheidt/github-webhooks --events=push,ping --url="http://localhost:5050/api/v1/webhooks" --github-host=api.github.com


# listen webhooks locally
ngrok http 5050
http://localhost:5050/api/v1/webhooks

# add the endpoint on github webhooks config on repo using push event
https://XXXX.XX.ngrok.io/api/v1/webhooks


# gh dash
gh extension search
gh extension install dlvhdr/gh-dash
gh dash


# some github APIs
# https://docs.github.com/pt/rest/webhooks/repos#list-repository-webhooks
curl \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  https://api.github.com/repos/juliocesarscheidt/github-webhooks/hooks

```
