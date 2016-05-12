# css-reactify
Convert from Vanilla CSS to React Inline styles

##Usage
For online use, just go to [css-reactify GitHub Pages](http://suhairzain.me/css-reactify). Or, for running it offline,

1. Clone the repo using `git clone https://github.com/SuhairZain/css-reactify.git`
2. `npm install`
3. `npm run serve` for a Webpack Dev Server which by default opens at [http://localhost:8080/webpack-dev-server](http://localhost:8080/webpack-dev-server/) OR
4. `npm run prod` for a minified version of the app and open `index.html` in your favourite browser.

##Development
I had created a website using React and CSS StyleSheets. When I wanted to move the styles from the css file to inline styles, I found it a bit cumbersome. So, created this app.

##Packages used
1. [Webpack](https://webpack.github.io/) along with [Babel](http://babeljs.io/) for bundling.
2. [CSS](https://github.com/reworkcss/css) for the input CSS Parsing. Seriously, it was a ton of help.
3. [React](https://facebook.github.io/react/) of course.
4. [Material UI](http://material-ui.com/) for the UI Components.
5. [camelcase](https://www.npmjs.com/package/camelcase) for converting from dash(-) seperated css-property names to camelCased properties.
6. [Stringinfy Object](https://github.com/yeoman/stringify-object) to create the final JS output.
