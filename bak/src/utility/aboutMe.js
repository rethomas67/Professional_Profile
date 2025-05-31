import fs from "fs";
import aboutFile from "./about.txt";

var data = {};
const myArray = [];

/*fs.readFile(aboutFile, "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});*/

var count = 0;
var paragraph = "";
data = { description: "abc", id: 1 };

myArray.push(data);
data = { description: "def", id: 2 };
myArray.push(data);

export default myArray;
