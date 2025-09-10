import { Food } from "../models/foodModel.js";
import fs from "fs";


const addFood = async(req,res) => {

     try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image uploaded" });
    }

    let image_filename = req.file.filename;

    const food = new Food({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: image_filename,
      category: req.body.category,
    });

    await food.save();
    res.json({ success: true, message: "Food Item Added Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error occurred in adding food item" });
  }
}

//food list

const listfood = async(req,res) => {
    try {
      const foods = await Food.find({});
      res.status(200).json({success:true, data:foods})
    } catch (error) {
      console.log(error);
      res.json({success:false, message:"Error"})
    }
}

//remove food item

const removefood = async(req,res) => {
    try {
      const food = await Food.findById(req.body.id);
      fs.unlink(`uploads/${food.image}`,() => {})

      await Food.findByIdAndDelete(req.body.id)
      res.json({success:true, message:"Food Removed successfully"})
    } catch (error) {
      console.log(error);
      res.json({success:false, message:"Error in deleting the food item"})
    }
}
export {addFood, listfood, removefood}