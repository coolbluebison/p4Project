import React from 'react'


function ItemCard({name, price, category, count, farmer_id}) {

    return (
        
        <div className='item-card-container'>
            <h6>
                {name}
            </h6>
            <p>
                {farmer_id}
            </p>
            <div>
                <img src = 'https://www.organicprairie.com/cdn/shop/products/organic-prairie-Ground-Beef-90-10-front-package.webp?v=1686706444'/>
            </div>
            <p>
                {price}
            </p>
            <button>
                Add to Cart
            </button>           
        </div>
    )
}

export default ItemCard;