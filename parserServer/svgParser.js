const fs = require("fs");
const THREE = require("three");
const SVGLoader = require("svgloader");

const parser = new SVGLoader();
try {
  const svg = parser.load(
    "C:/Users/katowice/git/laser/src/figura.svg",
    function (data) {
      console.log("data");
      console.log(data);
    }
  );
  console.log(svg);
} catch (err) {
  return console.error(err.stack);
}
