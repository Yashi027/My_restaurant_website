import React from 'react';
import './Myorders.css'
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { asset } from '../../assets/frontend_assets/asset';

function Myorders() {

    const { url, token } = useContext(StoreContext)
    const [data, setData] = useState([])
    const fetchOrders = async () => {
        try {
            const response = await axios.post(url + '/api/order/userorders', {}, { headers: { token } })
            setData(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]);
    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className="container">
                {
                    data.map((order,index) => {
                       return(
                        <div key={index} className='my-orders-order'>
                            <img src={asset.parcel_icon} alt="Order" />
                            <p>
                                {order.items.map((item,idx) => {
                                    if(idx == order.items.length-1){
                                        return item.name + " x " + item.quantity;
                                    }else{
                                        return item.name + " x " + item.quantity + " , ";   
                                    }
                                })}
                            </p>
                            <p>${order.amount}.0</p>
                            <p>Items: {order.items.length}</p>
                            <p><span>&#x25cf;</span><b>{order.status}</b></p>
                            <button>Track Order</button>
                        </div>

                       )
                    })
                }
            </div>
        </div>
    );
}

export default Myorders;
