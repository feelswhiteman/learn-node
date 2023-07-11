import fs from "fs";

const readStream = fs.createReadStream("../../built-in-modules.txt");

readStream.on("open", () => {
    console.log("The file is open");
});

readStream.on("close", () => {
    console.log("The file is closed");
});

readStream.close();
