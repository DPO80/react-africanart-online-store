import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../AllInOne';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                <div className="img-container">
                    <Title name="Afro art" title="our products" />
                
                <div className="row">
                <ProductConsumer>
                {value => {
                    return value.products.map( product =>{
                        return <Product key={product.id} 
                        product={product} />;
                    });             
                }}   
                </ProductConsumer>
                </div>
            </div>
        </div>
    </React.Fragment>
    // <Product />
            
        );
    }
}
