import React from 'react'
import ItemPage from './ItemPage'
import ItemCard from './ItemCard'
import ChoiceMenu from './ChoiceMenu'


function DispContainer() {

    return (

        <div class='disp-container'>

            <ChoiceMenu />
            <ItemCard />
            <ItemPage />
    
        </div>
    )
}

export default DispContainer;