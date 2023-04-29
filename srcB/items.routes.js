const express = require("express");

const ItemController  = require("../srcB/item.controller");

const router = express.Router();

router.post("/create", ItemController.createNewItem);
router.get("/get-all", ItemController.getItems);
router.get("/:name", ItemController.getSingleItem);
router.delete("/:id", ItemController.deleteOneItem);
router.put("/update/:id", ItemController.updateSingleItem);

module.exports = {
  itemRouter: router,
};