"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Check that tsc file has been created and that types/node is installed
var fs = require("fs");
// Parse data
var data = fs.readFileSync("../input.txt", "utf-8");
var dataByLine = data.split("\n");
//console.log(dataByLine);
// Solve puzzle from parsed data
var isAlpha = /([A-Za-z])+/gi;
var sum = 0;
var numArr = [];
dataByLine.forEach(function (line) {
    var cleanedString = line.replaceAll(isAlpha, "");
    numArr.push(cleanedString);
});
numArr.forEach(function (num) {
    if (num.length === 2) {
        sum += parseInt(num);
    }
    else {
        var firstlast = "".concat(num[0]).concat(num[num.length - 1]);
        sum += parseInt(firstlast);
    }
});
console.log(sum);
