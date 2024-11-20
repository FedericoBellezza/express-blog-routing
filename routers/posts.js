const express = require("express");
const router = express.Router();

const posts = [
  {
    title: "Titolo 1",
    content: "Contenuto del post 1",
    img: "ciambellone.jpeg",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
  {
    title: "Titolo 2",
    content: "Contenuto del post 2",
    img: "cracker_barbabietola.jpeg",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
  {
    title: "Titolo 3",
    content: "Contenuto del post 3",
    img: "pane_fritto_dolce.jpeg",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
  {
    title: "Titolo 4",
    content: "Contenuto del post 4",
    img: "pasta_barbabietola.jpeg",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
  {
    title: "Titolo 5",
    content: "Contenuto del post 5",
    img: "torta_paesana.jpeg",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
];

// index
router.get("/", (req, res) => {
  res.json({ text: "Lista dei post", posts });
});

// show
router.get("/:id", (req, res) => {
  res.json({ text: "Dettagli del post ", post: posts[req.params.id] });
});

// create
router.post("/", (req, res) => {
  res.send("Creazione nuovo post");
});

// update
router.put("/:id", (req, res) => {
  res.send("Modifica integrale del post " + req.params.id);
});

// delete
router.delete("/:id", (req, res) => {
  res.send("Eliminazione del post " + req.params.id);
});

module.exports = router;
