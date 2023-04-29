const express = require("express");

const {
  createItemController,
  getItemsController,
  getSingleItemController,
  deleteOneItemController,
  updateSingleItem,
} = require("../src/items.controller");

const router = express.Router();

router.get("/lists", getItemsController);

router.post("/create", createItemController);

router.get("/:name", getSingleItemController);

router.delete("/:id", deleteOneItemController);

router.put("/update/:id", updateSingleItem);


module.exports = router;