import  React, {useState} from 'react';
import {MdSearch, MdOutlineShoppingCart} from 'react-icons/md';
import logo from '../../assets/image/logo.jpg';
import { Link } from 'react-router-dom';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import styles from './headerMiddle.module.css';
import HeaderBottom from './HeaderBottom';


const HeaderMiddle = () => {
    
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);

    const toggleMenuHandler = () => {
        setToggleMenu ( prevState => !prevState);
    }
    const toggleSearchHandler = () => {
        setToggleSearch ( prevState => !prevState);
    }
    

    return (
        <div>
            <div className={styles.header_middle}>
                <div className={styles.nav}>
                    <AiOutlineMenu onClick={toggleMenuHandler}/>
                </div>
                <div className={styles.header_middle_left}>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className={toggleSearch ? styles.box_search_show : styles.box_search_hide}>
                    <div className={styles.header_middle_middle}>
                        <MdSearch/>
                        <select>
                            <option value="selectCategor" key="selectCategor">select category</option>
                            <option value="category1" key="category1" >category1</option>
                            <option value="category2" key="category2" >category2</option>
                            <option value="category3" key="category3" >category3</option>
                            <option value="category4" key="category4" >category4</option>
                        </select>
                        <input type="search" placeholder='search...' /> 
                    </div>
                </div>
                <div className={styles.header_middle_right}>
                    {toggleSearch ?
                        <AiOutlineClose className={styles.close} onClick={toggleSearchHandler} />:
                        <MdSearch onClick={toggleSearchHandler}/>
                    }
                    <div className={styles.cart}>
                        <div>
                            <span>0</span>
                        </div>
                        <Link to="/cart">
                            <MdOutlineShoppingCart />
                        </Link>
                    </div>
                    <Link to="/login"> <button>Login / Sign Up</button> </Link>
                </div>
            </div>
            <HeaderBottom toggleMenu={toggleMenu}/>
            {toggleMenu && <div className={styles.cover_background} onClick={toggleMenuHandler}></div>}
            
        </div>
    );
};

export default HeaderMiddle;