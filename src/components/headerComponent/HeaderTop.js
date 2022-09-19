import React from 'react';
import {FaFacebookF, 
    FaTwitter, 
    FaLinkedinIn, 
    FaWhatsapp, 
    FaInstagram, 
    FaTelegramPlane} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import styles from './headerTop.module.css'
    
const HeaderTop = () => {
    return (
        <div>
            <div className={styles.header_top}>
                <FaFacebookF />
                <FaLinkedinIn />
                <FaTelegramPlane />
                <FaTwitter />
                <MdEmail />
                <FaWhatsapp />
                <FaInstagram />
            </div>
        </div>
    );
};

export default HeaderTop;