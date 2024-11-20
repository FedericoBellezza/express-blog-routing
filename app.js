const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

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

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  res.json({
    postNumber: posts.length,
    posts,
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
