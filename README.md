# Reactive Ratebeer

![alt text](https://circleci.com/gh/topisark/reactive-ratebeer.png?&style=shield&circle-token=1989ca7311142115e17bbcc47e71cffa02f03a9f "CircleCI status")

Frontend of a hobby project to rate beers with React 16.

More or less built like a [PWA](https://en.wikipedia.org/wiki/Progressive_web_app) so can be added to the home screen on iOS and Android and should be responsive to different viewport sizes.

Start locally: `yarn start`. Requires dependencies to be installed: `yarn install`.

Unit tests: `yarn test`.

Browser tests: `yarn test-browser`. Tests are run on the version deployed to Heroku. TODO: Start a local dev server on CircleCI and run browser tests against that environment.

Commits to `master` are automatically deployed to Heroku.

[Continous integration on CircleCI.](https://circleci.com/gh/topisark/reactive-ratebeer)

[Live version on Heroku.](https://reactive-ratebeer.herokuapp.com/)

[Backend project on GitHub (reactive-ratebeer-lambdas).](https://github.com/topisark/reactive-ratebeer-lambdas)
