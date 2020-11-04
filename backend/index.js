const express = require("express");
const app = express();
const { Pool, Client } = require("pg");
const connectionString = "postgressql://postgres:test123@localhost:5432/testdb";

const client = new Client({
  connectionString: connectionString,
});

client.connect();

app.use(express.json());

app.get("/", async (req, res) => {
  client.query("SELECT * from company", (err, response) => {
    if (err) {
      console.log(err);
    }
    client.end();
    res.send(response);
  });
});

const port = process.env.PORT || 3000;

app.listen(port, console.log(`Server started on port ${port}`));
