import React from 'react'
import cofarm from '/home/Baran/Projects/phase4Project/newProject/p4Project/client/src/assets/cofarm.png';



function Banner(){

    return (
        <div className='banner-container' style={{ backgroundImage: `url(${cofarm})` }}>
            <h1>Are you tired of not being able to trust your food?</h1>
            <h2>So were we. That's why created Fresh Farm</h2>
        </div>

    )
}

export default Banner
