import React from 'react';
import styles from './loading.module.css';

const Loading = () => {

    setTimeout( () => {

    }, 1000)
    return (
        <div className={styles.background}>
            <div className={styles.loading}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;