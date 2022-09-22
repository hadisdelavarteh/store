import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.css';
import { validation } from '../../helper/validation';
import { notify } from '../../helper/toast';
import { ToastContainer } from 'react-toastify';

const SignUp = () => {

    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccept: false
    });

    const [errors, setErrors] = useState({});
    const [focus, setFocus] = useState({})

    useEffect(() => {
        setErrors(validation(data, "signup")); 
    }, [data])

    const submitHandler = e => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            notify("Your registration was successful", "success")
        } else {
            setFocus({
                username: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccept: true,
            });
            notify("Registration failed", "error")
        }
    }

    const changeHandler = event => {
        if (event.target.name === "isAccept")
            setData({ ...data, [event.target.name]: event.target.checked });
        else
            setData({ ...data, [event.target.name]: event.target.value });
    }

    const focusHandler = event => {
        setFocus({ ...focus, [event.target.name]: true });
    }

    return (
        <>
            <div className={styles.sign_up}>

                <h1>sign Up</h1>

                <form>
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={data.username}
                            onFocus={focusHandler}
                            onChange={changeHandler}
                            className={(focus.username && errors.username && styles.border_error) || (focus.username && "")}
                        />
                        {focus.username && errors.username && <span className={styles.error}> {errors.username} </span>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={data.email}
                            onFocus={focusHandler}
                            onChange={changeHandler}
                            className={focus.email && errors.email ? styles.border_error : ""}
                        />
                        {focus.email && errors.email && <span className={styles.error}> {errors.email} </span>}
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={data.password}
                            onFocus={focusHandler}
                            onChange={changeHandler}
                            className={((focus.password || focus.confirmPassword) && errors.password) ? styles.border_error : ""}
                        />
                        {focus.password && errors.password && <span className={styles.error}> {errors.password} </span>}
                    </div>

                    <div>
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={data.confirmPassword}
                            onFocus={focusHandler}
                            onChange={changeHandler}
                            className={focus.confirmPassword && errors.confirmPassword ? styles.border_error : ""}
                        />
                        {focus.confirmPassword && errors.confirmPassword && <span className={styles.error}> {errors.confirmPassword} </span>}
                    </div>

                    <div className={styles.accept}>
                        <label>Accept the rules</label>
                        <input
                            type="checkbox"
                            name="isAccept"
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        />
                    </div>
                        {focus.isAccept && errors.isAccept && <span className={styles.error}> {errors.isAccept} </span>}

                    <div className={styles.formButton}>
                        <Link to="/login" className={styles.login}>Login</Link>
                        <button onClick={submitHandler}>Sign Up</button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </>
        
    );
};

export default SignUp;