const Jsonnet = require("@hanazuki/node-jsonnet");
let jsonnet = new Jsonnet();
const params = {
    type: "query",
    query: `{a: 1 + 2, b: self.a * 3}`
};
jsonnet.evaluateSnippet(params.query).then(result => console.log(result));
