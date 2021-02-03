import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer, ButtonContainer2 } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <h6 className="top">Welcome to Clothing store, an app developed using React</h6>
                <NavWrapper className="navbar navbar-expand-sm px-sm-3  navbar-dark">
                    <Link to="/">
                        <img src={logo} alt="Store" className="navbar-brand mr-0" style={{marginTop:"-5px"}}></img>
                    </Link>
                    <ul className="navbar-nav align-items-center ">
                        <li className="nav-item">
                            <Link to="/" className="nav-link px-0"><h4 className="ml-10">Clothing Store</h4></Link>
                        </li>
                    </ul>
                    <div className="left-links">
                    <ButtonContainer2>
                    <Link to="/cart" className="left">
                        <span className="mr-2"></span> cart44
                    </Link> •
                    <Link to="/cart" className="left">
                        <span className="mr-2"></span> cart44
                    </Link> •
                    <Link to="/cart" className="left">
                        <span className="mr-2"></span> cart44
                    </Link> •
                    <Link to="/cart" className="left">
                        <span className="mr-2"></span> cart44
                    </Link> •
                    </ButtonContainer2>
                    <Link to="/cart" className="ml-0">
                        <ButtonContainer>
                            <span className="mr-2"><i className="fa fa-cart-plus" /></span> cart
                        </ButtonContainer>
                    </Link>
                    </div>
                </NavWrapper>
                <div className="Nav2">
                    One stop for amazing dresses,shirts,pants and many more! Enjoy Shopping
                </div>
            </div>
        )
    }
}

const NavWrapper=styled.nav`
background:var(--purpleOne);
margin-top:10px;
.nav-link{
    color:var(--whiteOne) !important;
    font-size:1.3rem;
}
h5{
    color:var(--whiteOne) !important;
}
.left-links{
    display:flex;
    flex-direction:row;
    margin-left:auto;
}
.left{
    margin-right:1vw;
}
.right{
    margin-left:1vw;
}
`


