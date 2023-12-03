//Check that tsc file has been created and that types/node is installed
import * as fs from "fs";

// Parse data
const data = fs.readFileSync("../input.txt", "utf-8");
const dataByLine = data.split("\n");
//console.log(dataByLine);

// Solve puzzle from parsed data
const isAlpha = /([A-Za-z])+/gi;
let sum: number = 0;
let numArr: string[] = [];

dataByLine.forEach((line) => {
  const cleanedString = line.replaceAll(isAlpha, "");
  numArr.push(cleanedString);
});

numArr.forEach((num) => {
  if (num.length === 2) {
    sum += parseInt(num);
  } else {
    let firstlast: string = `${num[0]}${num[num.length - 1]}`;
    sum += parseInt(firstlast);
  }
});

console.log(sum);
