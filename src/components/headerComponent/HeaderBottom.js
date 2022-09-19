import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';
import {FiUsers} from 'react-icons/fi';
import {IoCallOutline} from 'react-icons/io5';
import {GiBlackBook} from 'react-icons/gi';
import {TbBrandProducthunt} from 'react-icons/tb';
import {VscSignIn} from 'react-icons/vsc';

const Div = styled.div`
       border-top: 1px solid #eee;
       box-shadow: 0 16px 11px -11px #eee;
       display: flex;
       align-items: center;
       position: sticky;
       top: 0;
       transition: ease-in-out all 0.5s;
       transform: "translate(0)";
       z-index: 10;
       ul{ 
           li{
               display: inline;
               padding: 0 20px;
               cursor: pointer;
               color: var(--darkBlue);
    
               &:hover a{
                   color: var(--yellow);
               }
    
               &:hover{
                   border-bottom: solid 3px var(--yellow);
                   color: var(--yellow);
                   transition: ease-in-out 0.5 all;
               }
    
               &:last-child{
                   display: none;
               }
    
               svg{
                   margin-right: 5px;
               }
    
               a{
                   color: var(--darkBlue);
                   text-decoration: none;
               }
           }
       }
    
       @media( max-width: 860px ){
               position: fixed;
               top: 0;
               bottom: 0;
               left: 0;
               background-color: var(--darkBlue);
               align-items: start;
               transition: ease-in-out 0.5 all;
               transform: ${({toggleMenu}) => toggleMenu ? "translate(0)" : "translate(-100%)"};
                
               ul{
                   padding: 0;
                 
                   li{
                       color: #fff;
                       display: block;
                       margin-top: 10px;
                       transition: ease-in-out all 0.2s;
                       svg{
                           margin-right: 5px;
                       }
    
                       a{
                           color: #fff;
                           transition: ease-in-out all 0.2s;
                           &:hover{
                               color: var(--yellow);
                           }
                       }
                       &:hover{
                           color: var(--yellow);
                       }
                       &:last-child{
                           display: block;
                       }
                   }
               }
           }
        }
   }
 `

const HeaderBottom = ({toggleMenu}) => {
    
    return (
        <Div toggleMenu={toggleMenu}>
            <ul>
                <li>
                    <Link to="/">
                        <AiOutlineHome />
                        home
                    </Link>
                </li>
                <li>
                    <Link to="/products">
                        <TbBrandProducthunt />
                        products
                    </Link>
                </li>
                <li>
                    <IoCallOutline />
                    contact us
                </li>
                <li>
                    <FiUsers />
                    about us
                </li>
                <li>
                    <GiBlackBook />
                    weblog
                </li>
                <li>
                    <Link to="/login">
                        <VscSignIn />
                        login / sign up
                    </Link>
                </li>
            </ul>
        </Div>
    );
};

export default HeaderBottom;