import Order from "../models/orderModel.js";
import User from "../models/userModel.js";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


const placeOrder = async (req, res) => {
    const frontend_url='http://localhost:5173' 
    try {
        const neworder = Order({
            userId: req.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        })
        await neworder.save();
        await User.findByIdAndUpdate(req.userId, { cartData: {} });

        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100 * 80
            },
            quantity: item.quantity
        }))
        line_items.push(
            {
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: "Delivery Charges"
                    },
                    unit_amount: 2 * 100 * 80
                },
                quantity: 1
            }
        )
        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url:`${frontend_url}/verify?success=true&orderId=${neworder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${neworder._id}`
        })
        res.json({success: true, session_url:session.url})
    } catch (error) {
       console.log(error)
       res.status(309).json({success:false, message:"Error"})
    }
}

const verifyOrder = async (req,res) => {
    const {orderId , success} = req.body;
    try {
        if(success==="true"){
           await Order.findByIdAndUpdate(orderId,{payment:true});
           res.status(200).json({success:true, message:"Paid"})
        }else{
            await Order.findByIdAndDelete(orderId);
            res.status(200).json({success:false, message:"Not Paid"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:"Error"})
    }
}


export { placeOrder , verifyOrder }