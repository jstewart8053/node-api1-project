const express = require("express");
const server = express();
const knex = require("knex");
const config = require("../knexfile.js");
const db = knex(config.development);

module.exports = db;
// server.post("/api/users", (req, res) => {});
server.post("/api/users", function (req, res) {
  res.send("Got a POST request");
});

server.get("/api/users", (req, res) => {
  const users = db.getUsers();
  res.json([users]);
});
// server.get("/api/users/:id", (req, res) => {});
// server.delete("/api/users/:id", (req, res) => {});
// server.put("/api/users/:id", (req, res) => {});

server.listen(8000, () => {
  console.log("server running");
});

// | POST   | /api/users     | Creates a user using the information sent inside the `request body`.                                   |
// | GET    | /api/users     | Returns an array users.                                                                                |
// | GET    | /api/users/:id | Returns the user object with the specified `id`.                                                       |
// | DELETE | /api/users/:id | Removes the user with the specified `id` and returns the deleted user.                                 |
// | PUT    | /api/users/:id | Updates the user with the specified `id` using data from the `request body`. Returns the modified user
