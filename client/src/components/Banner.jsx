import React from 'react'
import cofarm from '/home/Baran/Projects/phase4Project/newProject/p4Project/client/src/assets/cofarm.png';



function Banner(){

    return (
        <div className='banner-container' style={{ backgroundImage: `url(${cofarm})` }}>
            <h3>Are you tired of not being able to trust your food?</h3>
            <h5>So were we. That's why created Fresh Farm</h5>
        </div>

    )
}

export default Banner
