const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
const path = require("path");

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.response(__dirname, "public", "index.html"));
});

app.listen(5006, () => console.log("server up and running"));

// schema.response(__dirname, "public", "index.html")
