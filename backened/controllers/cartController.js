import User from "../models/userModel.js";


const addToCart = async(req,res) => {
     try {
        let userData = await User.findOne({_id:req.body.userId})
        let cartData = await userData.cartData
        if(!cartData[req.body.ItemId]){
            cartData[req.body.ItemId]= 1;
        }else{
            cartData[req.body.ItemId] += 1;
        }
        await User.findByIdAndUpdate(req.body.userId,{cartData})
        return res.status(200).json({success: true, message: "Added to Cart"})
     } catch (error) {
        console.log(error)
        return res.status(309).json({success:false, message:"Error while adding food items"})
     }
}


const removeFromCart = async(req,res) => {
     try {
        
     } catch (error) {
        console.log(error)
     }
}

const getCart = async(req,res) => {

}

export {addToCart,removeFromCart,getCart}