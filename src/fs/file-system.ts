import http from "http";
import fs from "fs";

console.log("Listening on http://localhost:8080");

http.createServer((req, res) => {
    fs.readFile("file-system.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data ?? "Cant read a file");
        return res.end();
    });
}).listen(8080);
