import React from 'react'



function ItemPage() {

    return (

        <>
            <div className='item-container'>
                
                {/* Item image */}
                <img className = 'item-image' src ='https://www.organicprairie.com/cdn/shop/products/organic-prairie-Ground-Beef-90-10-front-package.webp?v=1686706444'/>
                

                <div className='item-details'>
                    <h3 className = 'item-name'>
                        Grass Fed Organic Ground Beef (1 lbs)    
                    </h3>

                    <p className = 'item-description'>
                        Deep Woods Organic Ground Beef. 93% fat content. It's the best ground beef you will ever taste in your life
                    </p>

                    <p className = 'item-description'>
                        Sold by Deep Woods Farms
                    </p>
                    
                    <p>
                        {/* Average Ratings  */}
                        Rating Visual Placeholder: 4.5 Stars
                    </p>
                    <p>
                        {/* Number of Ratings  */}
                    </p>
                </div>

                <div>
                    
                </div>

                <div className='item-price-container'>
                    
                    <h3 className = 'item-price'>Unit Price ($)</h3>
                    <h3 className = 'item-price'>9.99</h3>
                    
                    <select className="quantity-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <h3 className = 'item-total'>Total Price</h3>

                    <button className="add-to-cart-btn">Add to Cart</button>
                </div>
            
            </div>


            <div className = 'farm-container'>
                <div>
                    <h2 style={{alignContent:'center'}}>Farm Name - Deep Wood Farms</h2> 
                </div>
                <div>
                    <img src='https://images.trvl-media.com/hotels/40000000/39990000/39986400/39986344/5f01bdee_z.jpg' width='50%' height='200%'/>
                </div>
                <div>
                    <p>
                        Deep Wood Farms are family farm that is located right oustide of Salida, CO. It has been in the family for 3 generations. They produce some of the finest beef products that are availabe in the State of Colorado.
                    </p>
                </div>
            </div>
        </>

    )
}


export default ItemPage; 