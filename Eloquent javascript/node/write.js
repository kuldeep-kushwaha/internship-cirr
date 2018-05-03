let {readFile} = require("fs");
readFile("run.js", "utf8", (error, buffer) => {
  if (error) throw error;
  console.log("The file contained", buffer.length, "bytes.",
              "The first byte is:", buffer);
});
