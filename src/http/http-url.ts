import http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>" + req.url + "</h1>");
    res.end();
});

server.listen(8080, () => {
    console.log("Listening on http://localhost:8080");
});
