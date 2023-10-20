import React from 'react'


function ItemCard({name, price, category, count, farmer_id, image_src}) {

    return (
        
        <div className='item-card-container'>
            <h6>
                {name}
            </h6>
            <p>
                {farmer_id}
            </p>
            <div>
                <img src= {image_src} />
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