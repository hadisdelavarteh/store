import React from 'react';
import styles from './header.module.css'
import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';

const Header = () => {

    
    return (
        <div className={styles.header}>
            <HeaderTop />
            <HeaderMiddle />
        </div>
    );
};

export default Header;