import React from 'react';
import {AiFillInstagram, AiOutlineTwitter, AiFillFacebook, AiFillMail} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
        <p> Copyright &copy; 06art All Rights Reserved </p>
        <p className="icons">
            <AiFillInstagram href="https://www.instagram.com/06art4real?r=nametag" />
            <AiOutlineTwitter href="https://www.twitter.com/06art4real" />
            <AiFillFacebook href="https://www.facebook.com/kefarts/" />
            <AiFillMail href="mailto:06art@gmail.com"/>
        </p>
    </div>
  )
}

export default Footer