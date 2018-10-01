# Downfall landing page

"Temporary" page set up to direct users to other Downfall communities while the site is "in development".

Based on HTML5 Up Dimension theme.

## Installation

1. Node 10+/NPM 6+
1. Clone this repo, `cd` into local folder
1. `npm install`

## Local dev

1. `npm start`
1. Visit [http://localhost:8080/](http://localhost:8080/)

## Push to production

1. From local root of project: `npm run build && rsync -azP --delete dist/ [username]@[remote]:[app-directory/]`