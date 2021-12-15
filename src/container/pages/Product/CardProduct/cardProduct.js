import React, { Component } from 'react';
import Counter from './counter';

class CardProduct extends Component {
    render() {
        return (
            <div className="card">
                <div className="img-thumb">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/colonel_ori_pack10.jpg" alt="product_img" />
                </div>
                <p className="title">Daging Ayam Berbumbu Rasa Original plus Tepung Crispy [1 Carton - 10 Pack]</p>
                <p className="price">Rp410.000</p>
                <Counter />
            </div>
        );
    }
}

export default CardProduct;