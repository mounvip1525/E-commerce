import React, { Component } from 'react';
import { storeProducts , detailProduct } from './data';

//Comes with Provider(contains all the info about the application) and Consumer(for making use of the indo provided by the Provider)
const ProductContext=React.createContext();

//Sits on top of our component tree
class ProductProvider extends Component {
    state={
        // products:storeProducts,
        products:[],
        detailProduct:detailProduct,
        cart:storeProducts,
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0
    }
    componentDidMount(){
        this.setProducts();
    }
    setProducts=()=>{
        let tempProducts=[];
        storeProducts.forEach(product=>{
            const singleProduct={...product};
            tempProducts=[...tempProducts,singleProduct];
        });
        this.setState(()=>{
            return { products: tempProducts };
        });
    };

    getItem=(id)=>this.state.products.find(item=>item.id===id);
    // getItem=(id)=>{
    //     const foundItem=this.state.products.find(item=>item.id===id);
    //     return foundItem;
    // }

    handleDetail=(id)=>{
        // console.log("hello from handle detail");
        const productForDetail=this.getItem(id);
        this.setState(()=>{
            return { detailProduct: productForDetail }
        })
    }
    addToCart=(id)=>{
        // console.log(`add to cart.id is ${id}`);
        let tempProducts=[...this.state.products];
        const index=tempProducts.indexOf(this.getItem(id));
        const product=tempProducts[index];
        product.inCart=true;
        product.count=1;
        const price=product.price;
        product.total=price;
        this.setState(()=>{
            return{ products:tempProducts, cart:[...this.state.cart,product] };
        },()=>{console.log(this.state)});
    }
    increment=id=>{
        console.log("increment method");
    }
    decrement=id=>{
        console.log("decrement method");
    }
    removeItem=id=>{
        console.log("item removed from cart");
    }
    clearCart=()=>{
        console.log("cart has been cleared");
    }
    openModal=(id)=>{
        const product=this.getItem(id);
        this.setState(()=>{
            return {modalProduct:product,modalOpen:true}
        })
    }
    closeModal=()=>{
        this.setState(()=>{
            return {modalOpen:false}
        })
    }
    render() {
        return (
            <ProductContext.Provider 
                value={{...this.state,handleDetail:this.handleDetail,
                                      addToCart:this.addToCart,
                                      openModal:this.openModal,
                                      closeModal:this.closeModal,
                                      increment:this.increment,
                                      decrement:this.decrement,
                                      removeItem:this.removeItem,
                                      clearCart:this.clearCart}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer=ProductContext.Consumer;

export {ProductProvider,ProductConsumer}; 
