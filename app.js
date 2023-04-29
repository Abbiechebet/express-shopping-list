const express = require("express");
const app = express();
const {itemRouter} = require("./srcB/items.routes");

const port = 8080;
app.use(express.json());
app.use("/api/v1/items", itemRouter);

app.listen(port, () => {
  console.log("Thankyou Lord for this far. on PORT:8080");
});