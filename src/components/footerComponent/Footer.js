import React from 'react';
import styles from './footer.module.css';
import {FaFacebookF, 
    FaTwitter, 
    FaLinkedinIn, 
    FaWhatsapp, 
    FaInstagram, 
    FaTelegramPlane} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

const Footer = () => {
    return (
        <>
            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#00013a" d="M0,128L60,144C120,160,240,192,360,176C480,160,600,96,720,101.3C840,107,960,181,1080,202.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
            <div className={styles.footer}>
                <div className={styles.footer_top}>
                    <div className={styles.about_us}>
                        <h6>About Us</h6>
                        <p>Lorem contact us sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className={styles.quick_access}>

                        <h6>Quick Access</h6>
                        <ul>
                            <li>Home</li>
                            <li>Products</li>
                            <li>about Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className={styles.contact_us}>
                        <h6>Contact Us</h6>
                        <ul>
                            <li>
                                <span>Address: </span>contact us sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                            </li>
                            <li>
                                <span>Working time: </span> Saturday to Wednesday 8am to 5pm
                            </li>
                            <li>
                                <ul>
                                    <li> <FaFacebookF /> </li>
                                    <li> <FaLinkedinIn /> </li>
                                    <li> <FaTelegramPlane /> </li>
                                    <li> <FaTwitter /> </li>
                                    <li> <MdEmail /> </li>
                                    <li> <FaWhatsapp /> </li>
                                    <li> <FaInstagram /> </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bottom_footer}>
                    <p>diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
                </div>
            </div>
        </>
    );
};

export default Footer;