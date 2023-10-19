import React from 'react'
import Banner from './Banner'
import ChoiceMenu from './ChoiceMenu'
import ItemsContainer from './ItemsContainer'


function HomeContainer() {

    return (

        <div className='home-container'>

            <Banner />
            <ChoiceMenu />
            <ItemsContainer />
        
        </div>
    )
}

export default HomeContainer
