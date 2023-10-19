import React from 'react'


function ItemCard() {

    return (
        
        <div class='item-card-container'>
            <h6>
                Item Name - Deep Wood Ground Beef
            </h6>
            <p>
                by Farm This
            </p>
            <div>
                <img src = 'https://www.organicprairie.com/cdn/shop/products/organic-prairie-Ground-Beef-90-10-front-package.webp?v=1686706444'/>
            </div>
            <p>
                Price - $9.99
            </p>
            <button>
                Add to Cart
            </button>           
        </div>
    )
}

export default ItemCard;