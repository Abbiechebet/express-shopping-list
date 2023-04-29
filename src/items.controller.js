const items = require("../src/items.data")
// const fs = require("fs")
// const items = 
// JSON.parse(
//     fs.readFileSync(`./src/items.data.json`, "utf-8", (err, data) => {
//       if (err) console.log(err);
//     })
//  );

const getItemsController = (req, res) => {
  res.status(200).json({
    status: "success",
    message: items.length < 1 ? "items not found" : "items found",
    items
  });
};

const createItemController = (req, res) => {
    const itemObject = req.body
    items.push(itemObject)
    res.status(201).json({
      status: 'success',
      message: 'items Created',
      data: {items },
    })
  }  

const getSingleItemController = (req, res) => {
const name = req.params.name
console.log(`The item is: ${name}`)
if(!name) return res.status(404).json({
  status: 'failed',
  message: 'Please pass in an item name',
})

const item = items.find((i) => i.name.toLowerCase() === name.toLowerCase())
if(!item) return res.status(404).json({
  status: 'failed',
  message: 'item not found',
})

return res.json({
  status: 'success',
  message: 'item found',
  item
})
}

const deleteOneItemController = (req, res) => {
return res.status(200).json({
  status: 'success',
  message: "item deleted"
})
}

const updateSingleItem = function (req, res) {
    const id =(req.params.id);

    if (id > items.length - 1) throw new error("item does not exist");
    items[id] = req.body;

    res.status(200).json({
      status: "success",
      message: "item updated successfully",
      data: { items },
    });
  }

// searchController: function(req, res){
// const{search,page,limit} = req.query
// res.status(200).json({
//   status: "success",
//   message:"search result found",
//   data:{search, limit, page}
// })
// }


module.exports = { 
  getItemsController,
  createItemController,
  getSingleItemController,
  deleteOneItemController,
  updateSingleItem
};
