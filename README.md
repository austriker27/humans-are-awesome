# The HH Color Picker

This is a fun little color picker that generates random color and allows a user to pick a color swatch from a bunch of randomly generated colors. Right now the total numbers generated is 100 but this is relatively easy to change by updating the `totalNumberOfColors` variable in `src/component/App/index.js`. Upon clicking on a color swatch the website generates two color swatches with lighter luminosity and two color swatches with darker luminosity. A user can hit the clear button to go back. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
a computer, the internet, and much brawndo to stay hydrated
```

### Installing

A step by step series of examples that tell you how to get a development env running

To install and run on your machine, git clone or download the repo and then run the following commands. 

```
npm install
npm run start
```

Point your browser to [localhost](http://localhost:3000/) to preview. It will live reload as you make any updates to the React or CSS files. 


Here's a gif preview of what the website actions looks like:
![A screencaptured gif of how to use this website](https://dzwonsemrish7.cloudfront.net/items/0S2V363r0C1j1N2g1j0F/Screen%20Recording%202018-06-14%20at%2010.58%20AM.gif)

## Easter Egg

Per typical convention the HH logo in the navigation bar brings a user back to the home page. 


## Deployment

Deployed via the amazing Netlify to [here](https://hh-color-picker.netlify.com/#/).

## Built With

* [ReactJS](https://reactjs.org/) - The JS framework used
* [TailwindCSS](https://tailwindcss.com/) - Utility first CSS framework
* [Webpack](https://webpack.js.org/) - Used to generate RSS Feeds
* [randomColorJS](https://github.com/davidmerfield/randomColor) - Used to generate RSS Feeds

## Contributing

Feel free to create a fork and then send a PR if you would like to contribute.

## Authors

* **David Lindahl** - *A Man Coding Army* - [My Github](https://github.com/austriker27)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Much thanks to friends and family who put up with me

## TODO

* Create some tests
* Design layout for mobile first
* Add ability for user to change the total number of randomly generated colors
* perfect the color swatch details page so it more accurately grabs color variants of the selected color
* underline the current page in the pagination feature
* search functionality
* functionality for the colors on the sidebar
* perhaps find a color API to use for the color swatches and details page

MIT © [David A. Lindahl](www.davidalindahl.com)