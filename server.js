const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.post("/books", (req, res) => {
  // ...
  console.log("A POST Request was made!");
});

// HTTP GET /books/:id
app.get("/books/:id", (req, res) => {
  // ...
  console.log(`A GET Request was made! Getting book ${req.params.id}`);
});

// HTTP PATCH /books/:id
app.patch("/books/:id", (req, res) => {
  // ...
  console.log(`A PATCH Request was made! Updating book ${req.params.id}`);
});

// HTTP DELETE /books/:id
app.delete("/books/:id", (req, res) => {
  // ...
  console.log(`A DELETE Request was made! Deleting book ${req.params.id}`);
});

app.listen(PORT, () => console.log(`Server is up on port ${PORT}.`));
