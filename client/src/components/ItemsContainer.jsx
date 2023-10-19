import React from 'react'
import ItemCard from './ItemCard'


function ItemsContainer({data, choice})  {


    const filtered_data = data.filter((item) => item.category === choice);

    return (

        <div className='disp-container'>

            {
                filtered_data.map( item => (<ItemCard key={item.id} name={item.name} price={item.price} category={item.category} count={item.count} farmer_id={item.farmer_id}/> )
                )
            }

        </div>

    )
}


export default ItemsContainer
