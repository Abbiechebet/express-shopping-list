const { itemValidator } = require("../srcB/items.validator")
const items = require("../srcB/items.data")

class ItemController {
    static createNewItem(req, res) {
      const { error, value } =  itemValidator.validate(req.body)
      if(error) throw new Error(error.details[0].message)
      items.push(value);
      res.status(201).json({
        message: "item created successfully",
        status: "success",
        data: {
          items,
        },
      });
    }


    static getItems (req, res) {
      const { error, value } =  itemValidator.validate(req.body)
      if(error) throw new Error(error.details[0].message)
      res.status(200).json({
        status: "success",
        message: items.length < 1 ? "items not found" : "items found",
        items
      });
    };
    
    static getSingleItem (req, res) {
      const { error, value } =  itemValidator.validate(req.body)
      if(error) throw new Error(error.details[0].message)
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
    
    static deleteOneItem(req, res){
      const { error, value } =  itemValidator.validate(req.body)
      if(error) throw new Error(error.details[0].message)
    return res.status(200).json({
      status: 'success',
      message: "item deleted"
    })
    }
    
    static updateSingleItem (req, res) {
      const { error, value } =  itemValidator.validate(req.body)
      if(error) throw new Error(error.details[0].message)
        const id =(req.params.id);
    
        if (id > items.length - 1) throw new error("item does not exist");
        items[id] = req.body;
    
        res.status(200).json({
          status: "success",
          message: "item updated successfully",
          data: { items },
        });
      }
    

  }
  
  module.exports = ItemController;