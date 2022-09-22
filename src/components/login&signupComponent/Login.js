import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.css';
import { validation } from '../../helper/validation';
import { notify } from '../../helper/toast';
import { ToastContainer } from 'react-toastify';

const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const [focus, setFocus] = useState({})

    useEffect(() => {
        setErrors(validation(data , "login")); 
    }, [data])

    const submitHandler = e => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            notify("You have successfully logged in", "success")
        } else {
            setFocus({
                email: true,
                password: true,
            });
            notify("Your information is not correct", "error")
        }
    }

    const changeHandler = event => {
        setData({ ...data, [event.target.name]: event.target.value });
    }

    const focusHandler = event => {
        setFocus({ ...focus, [event.target.name]: true });
    }

    return (
        <>
            <div className={styles.sign_up}>

                <h1>Login</h1>

                <form onSubmit={submitHandler}>
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

                    <div className={styles.accept}>
                        <label>Remember Me</label>
                        <input type="checkbox" />
                    </div>

                    <div className={styles.forgetPassword}>
                        <Link to="/login">Forget Password?</Link>
                    </div>
                    <div className={styles.formButton}>
                        <Link to="/signup" className={styles.login}>Sign Up</Link>
                        <button> Login</button>
                    </div>
                </form>

                <ToastContainer />

            </div>
        </>
    );
};

export default Login;