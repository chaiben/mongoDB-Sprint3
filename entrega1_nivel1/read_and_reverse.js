const { readdir, readFile, writeFile } = require("fs");
const { join } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = (str) => str.split("").reverse().join("");

const printErr = (err) => console.log(err.message);

// Read and reverse contents of text files in a directory
const readdirFn = (inbox) => {
  return new Promise((resolve, reject) => {
    readdir(inbox, (error, files) => {
      if (error) reject(new Error("Error: Folder inaccessible"));
      resolve(files);
    });
  });
};
// Read folder

// Read file function
const readFileFn = (inbox, file) => {
  return new Promise((resolve, reject) => {
    readFile(join(inbox, file), "utf-8", (error, data) => {
      if (error) reject(new Error("Error: File error"));
      resolve(data);
    });
  });
};

// Write file with reversed text
const writeFileWithReversedText = (outbox, file, data) => {
  return new Promise((resolve, reject) => {
    writeFile(join(outbox, file), reverseText(data), (error) => {
      if (error) reject(new Error("Error: File could not be saved!"));
      resolve(`${file} was successfully saved in the outbox!`);
    });
  });
};

const callReverseText = async (inbox, outbox) => {
  let files, data, result;
  try {
    // Read dir
    files = await readdirFn(inbox);
  } catch (err) {
    printErr(err);
    return false
  }

  // For each file
  for (const file of files) {
    // Read their content
    try {
      data = await readFileFn(inbox, file);
    } catch (err) {
      printErr(err);
    }

    // Write reversed text
    try {
      result = await writeFileWithReversedText(outbox, file, data);
      console.log(result);
    } catch (err) {
      printErr(err);
    }
  }
};

callReverseText(inbox, outbox);
