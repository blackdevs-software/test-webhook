# Github Webhooks

```bash

gh extension list
gh extension install cli/gh-webhook


gh webhook forward --repo=juliocesarscheidt/test-webhook --events=ping --url="http://localhost:5050/api/v1/webhooks" --github-host=api.github.com

gh webhook forward --org=blackdevs-software --repo=test-webhook --events=ping --url="http://localhost:5050/api/v1/webhooks" --github-host=api.github.com


# listen webhooks locally
ngrok http 5050
http://localhost:5050/api/v1/webhooks

https://XXXX.XX.ngrok.io/api/v1/webhooks


gh extension search
gh extension install dlvhdr/gh-dash
gh dash


# https://docs.github.com/pt/rest/webhooks/repos#list-repository-webhooks

https://api.github.com/repos/juliocesarscheidt/test-webhook/hooks

export GITHUB_TOKEN=''

curl \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  https://api.github.com/repos/juliocesarscheidt/test-webhook/hooks

curl \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  https://api.github.com/orgs/blackdevs-software/hooks

```
