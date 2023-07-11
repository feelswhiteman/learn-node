import http from "http";
import { IncomingMessage, ServerResponse } from "http";
import url from "url";

console.log("Listening on http://localhost:8080");

http.createServer((req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const query = url.parse(req.url ?? "", true).query;
    const txt = query.year + " " + query.month;
    res.end(txt);
}).listen(8080);
