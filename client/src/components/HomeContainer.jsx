import React, {useState, useEffect} from 'react'
import Banner from './Banner'
import ChoiceMenu from './ChoiceMenu'
import ItemsContainer from './ItemsContainer'
import NavBar from './NavBar'


function HomeContainer() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/product_table")
        .then((response) => response.json())
        .then((file) => setData(file))
        }, [])


    const [choice, setChoice] = useState()

    return (

        <div className='home-container'>

            <NavBar />
            <Banner />
            <ChoiceMenu choice={choice} setChoice={setChoice}/>
            <ItemsContainer data={data} choice={choice}/>
        
        </div>
    )
}

export default HomeContainer
