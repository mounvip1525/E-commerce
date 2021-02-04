import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                    const { modalOpen , closeModal } = value;
                    const { img , title , price } = value.modalProduct;
                    if(!modalOpen){
                        return null;
                    } else {
                        return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                        <h3>Item added to cart!</h3>
                                        <img src={img} className="img-fluid" alt="product" />
                                        <h5 className="text-muted mt-2">price : $ {price} </h5>
                                        <div className="divider">
                                        <Link to="/">
                                            <ButtonContainer onClick={()=>{closeModal();}}>
                                                continue shopping
                                            </ButtonContainer>
                                        </Link>
                                        <Link to='/cart'>
                                            <ButtonContainer onClick={()=>{closeModal();}}>
                                                go to cart
                                            </ButtonContainer>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                    );
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer=styled.div`
z-index:500;
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    top:15px;
    background:var(--purpleTwo);
    border:5px solid white;
    display:flex;
    flex-direction:column;
    padding:5px;
}
.divider{
    border-top:2px solid white;
}
img{
    height:60vh;
    object-fit:contain;
}
`;
