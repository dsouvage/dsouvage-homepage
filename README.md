# Dylan Souvage Personal Website

[![Build Status](https://travis-ci.org/firefelix/dsouvage-homepage.svg?branch=master)](https://travis-ci.org/firefelix/dsouvage-homepage)

[firefelix.github.io/dsouvage-homepage/](https://firefelix.github.io/dsouvage-homepage/)

This is a personal webpage for [Dylan Souvage](https://www.linkedin.com/in/dylan-souvage/), built using React and deployed to GitHub pages. 

## Information

This project uses [React](https://reactjs.org/), [gitconnected](https://gitconnected.com/portfolio-api), [ESLint](https://eslint.org/), [Sass](https://sass-lang.com/), [npm](https://www.npmjs.com/), [gh-pages](https://github.com/tschaub/gh-pages), [TravisCI](https://travis-ci.org/)  and [Enzyme](https://enzymejs.github.io/enzyme/).

Website content comes from gitconnected, the style comes from Sass, the content is rendered from React, code standards are maintained with ESlint, Enzyme is used for testing, package manager of choice is npm, deploying is handled through gh-pages, the code is continuously integrated through TravisCI.

## Installation
Clone the repo to local 

```bash
git clone https://github.com/firefelix/dsouvage-homepage.git
```

Use the package manager [npm](https://www.npmjs.com/) to install/deploy.

```bash
npm install
```

## Usage

Running on local:
```bash
npm start
```

Checking ESLint on local:
```bash
npm run lint
```

Running tests on local:
```bash
npm run test
```

## Deploying

This app is set up with continuous integration via [TravisCI](https://travis-ci.org/) and [gh-pages](https://github.com/tschaub/gh-pages), assuming code passes all linting and testing.
```bash
npm run lint
```
```bash
npm run test
```

## Credit
[Awesome Developer Portfolio](https://levelup.gitconnected.com/build-an-awesome-developer-portfolio-website-using-react-667abd7bab4d)
[Deploying React app to GitHub Pages via Travis CI](https://medium.com/@rossanodan/deploying-a-react-application-on-github-pages-via-travis-ci-ba0fc2c4c74)