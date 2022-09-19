import React, { useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styles from './counter.module.css';

const Counter = () => {
    
    const [count, setCount] = useState(0);

    const clickHandler = (type) => {
        type === "plus" ?
        setCount(prevState => prevState+1):
        setCount(prevState => prevState-1)
    }

    return (
        <div className={styles.addToCard}>
            {count === 1 ? 
              <BiTrash /> : 
              <AiOutlineMinus onClick={() => clickHandler("min")}/>
            }
            <span>{count}</span>
            <AiOutlinePlus onClick={() => clickHandler("plus")}/>
        </div>
    );
};

export default Counter;