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

export {addFood}