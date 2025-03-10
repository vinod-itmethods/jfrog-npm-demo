// src/index.js

const _ = require("lodash");

function greet(name) {
    return `Hello, ${_.startCase(name)}!`;
}

console.log(greet("jfrog demo"));

module.exports = greet;
