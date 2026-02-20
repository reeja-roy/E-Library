import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hey working");
});

app.listen(4000, () => {
  console.log("server running successfull");
});
