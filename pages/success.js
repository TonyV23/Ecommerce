import React, { useState, useEffect} from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'
import { useRouter } from 'next/router'

import { useStateContext } from '../context/useStateContext'
import { runFireworks } from '../lib/utils'

const Success = () => {

    const { setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();
    const [ order, setOrder] = useState(null);

    //make sure if previous orders are completely ended
    useEffect(() =>{
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, []) 

  return (
    <div className="success-wrapper">
        <div className="success">
            <p className="icon"><BsBagCheckFill/></p>
            <h2>Thank you for your order !</h2>
            <p className="email-msg">Check your email inbox for the receipt</p>
            <p className="description">
                If you have any questions, please email we love to hear about you
                <a className="email" href="mailto:06art@gmail.com">06art@gmail.com</a>    
            </p>
            <Link href="/">
                <button type="button" width="300px" className="btn">Continue Shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default Success