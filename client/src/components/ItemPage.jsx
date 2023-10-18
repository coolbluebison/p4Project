import React from 'react'



function IndividualItem() {

    return (

        <div>
            
            <div>
                <h2>
                    Name of the Item    
                </h2>

                <h4>
                    Description of the Product
                </h4>
            </div>

            <div>
                <p>
                    {/* Average Ratings  */}
                    4.5 Stars
                </p>
                <p>
                    {/* Number of Ratings  */}
                </p>
            </div>

            <img src =''/>

            <div>
                <h2>
                    Price
                </h2>
            </div>

            <div>
                <h2>Unit Price ($)</h2>
                <button>Quantity Button</button>
                <h2>Total Price</h2>

                <button>Add to Cart</button>
            </div>
        </div>
    )
}


export default IndividualItem; 