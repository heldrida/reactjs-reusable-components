# Reactjs reusable components

A collection of reusable components to use in Reactjs projects by Punkbit

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
Clone the repository to your local environment, install any dependencies and install the packages. Run the development command to start a local server, run the test command to run unit tests and the build command to create a new version for release.
Use the `config.js` in the root to set any parameters, such as the `repository remote list`, it's recommended to use a PaaS like Heroku or alike to easy deployment.

### Prerequisities

```
NodeJS + NPM
```

### Installing

```
npm install
```

```
gulp build
```

### Development

```
gulp dev
```

### Test runner

```
gulp test
```

### Tests

The tests are split in two different categories, Unit and End-to-end (integration) tests. These are run separately, there are two different tasks for that matter: `gulp unit_test` & `gulp end2end_test`. 

### Preview the app for distribution

Run the command below to create a small web server to serve the app that exists for distribution ( run the build command to create and see the `dist` directory ).

```
gulp preview
```

### Build architecture

Find the source code under the `src` directory for javascript and `sass` for the stylesheets. Before modifying ensure that the development watcher is running by running the development watch command (see development notes). The `dist` directory holds the files ready for distribution.

## Built With

* ReactJS
* Webpack
* SASS
* ES2015
* GULP
* MOCHA
* CHAI
* ENZYME
* ZOMBIEJS