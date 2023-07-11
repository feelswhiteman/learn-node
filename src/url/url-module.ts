import url from "url";

const adr = "http://localhost:8080/default.html?year=2023&month=July";
const q = url.parse(adr, true);

console.log(adr);
console.log(q.href);

console.log(q.protocol);

console.log(q.hostname);
console.log(q.port);
console.log(q.host);

console.log(q.path);
console.log(q.pathname);

console.log(q.search);

console.log("---------------------");

const parseQueryStringTrue = url.parse(adr, true);
const parseQueryStringFalse = url.parse(adr, false);

console.log(parseQueryStringTrue.query);
console.log(parseQueryStringFalse.query);
