# SelfReflect Web

SelfReflect is a project developed as part of a final year BSc Computer Science project at the University of Bath. It is an application to allow users to record their mental health wellbeing, with the goal to allow them to map this wellbeing to other data about them (via external APIs). This will allow users to investigate the relationships between their mental health wellbeing, social media activity (Twitter) and exercise information (Strava).

This specific project serves as the frontend to SelfReflect. The back end API (SelfReflect API) is also required; its documentation and setup guide can be found [here (SelfReflect API)](https://github.com/liamjcrewe/selfreflect-api).

## Get started

Run the following commands:

```sh
$ git clone https://github.com/liamjcrewe/selfreflect-web
$ cd selfreflect-web
$ npm install
$ npm run build
```

Then, create the following config files:
* `config/api.js`
* `config/strava.js`

Example config files have been included in the config directory for all of these.

To run a http server locally, to access the application, you can run:

```sh
$ npm install -g http-server
$ http-server public/
```

## Other npm scripts

### Build in development mode

Run ```npm run build-dev``` to enable debugging.

### Watch for JavaScript changes

Run ```npm run watch``` to rebuild JavaScript as you make changes (in ```src/``` directory). You can also run ```npm run watch-dev``` to enable debugging.

### ConnectStrava app

This project actually contains two apps: one in ```src/``` (the main app), and one in ```connectStrava/``` (handles redirect when connecting to Strava). These are both built when using the build and build-dev commands, but can be built individually using:

```sh
$ npm build:src
$ npm build-dev:src
```

and

```sh
$ npm build:connect-strava
$ npm build-dev:connect-strava
```
