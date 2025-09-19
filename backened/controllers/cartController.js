import User from "../models/userModel.js";


const addToCart = async (req, res) => {
   try {
      let userData = await User.findOne({ _id: req.userId })
      let cartData = await userData.cartData
      const { itemId } = req.body;
      if (!itemId) {
         return res.status(400).json({ success: false, message: "itemId is required" });
      }

      if (!cartData[req.body.itemId]) {
         cartData[req.body.itemId] = 1;
      } else {
         cartData[req.body.itemId] += 1;
      }
      await User.findByIdAndUpdate(req.userId, { cartData })
      return res.status(200).json({ success: true, message: "Added to Cart" })
   } catch (error) {
      console.log(error)
      return res.status(409).json({ success: false, message: "Error while adding food items" })
   }
}


const removeFromCart = async (req, res) => {
   try {

      let userData = await User.findById(req.userId);
      let cartData = await userData.cartData;
      const { itemId } = req.body;
      if (!itemId) {
         return res.status(400).json({ success: false, message: "itemId is required" });
      }

      if (cartData[req.body.itemId] > 0) {
         cartData[req.body.itemId] -= 1;
         if (cartData[itemId] === 0) delete cartData[itemId];
      }
      await User.findByIdAndUpdate(req.userId, { cartData })
      res.status(200).json({ success: true, message: "Removed from cart" });
   } catch (error) {
      console.log(error);
      res.status(409).json({ success: false, message: "Error in removing an item from cart" });
   }
}

const getCart = async (req, res) => {
   try {
      let userData = await User.findById(req.userId);
      let cartData = await userData.cartData;
      res.status(200).json({ success: true, message: "Cart Items fetched successfully", cartData })
   } catch (error) {
      console.log(error)
      res.status(409).json({ success: false, message: "Error in fetching cart Items" })
   }
}

export { addToCart, removeFromCart, getCart }