import http from "http";
import url from "url";
import fs from "fs";

console.log("Listening on http://localhost:8080");

http.createServer((req, res) => {
    const query = url.parse(req.url ?? "", true);
    const fileName = "." + query.pathname;
    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            return res.end("404 Not Found! " + query.pathname);
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
    });
}).listen(8080);
