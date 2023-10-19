import React, {useState} from 'react'


function ChoiceMenu({choice, setChoice}) {


    const [selectedCategory, setSelectedCategory] = useState(null)



    return (


        <>
        {/* main choice menu */}
            <div className='disp-container'>
                <div>
                    <button onClick={(e)=>setSelectedCategory('meat')}> Meat & Poultry </button>
                </div>

                <div>
                    <button onClick={(e)=>setSelectedCategory('dairy')}> Dairy </button>
                </div>

                <div>
                    <button onClick={(e)=>setSelectedCategory('produce')}> Produce </button>
                </div>

                <div>
                    <button onClick={(e)=>setSelectedCategory('others')}> Eggs & Others </button>
                </div>
            </div>

            <>
                {selectedCategory === 'meat' ?
                    <div className = 'sub-choices' id='meat-choices'>
                        <div className="category-button" onClick={(e)=>setChoice("Beef")}>
                            <img src="https://embed.widencdn.net/img/beef/hmla7wxlvl/1120x1120px/Beef_Lifestyle_190716_0868.tif?keep=c&u=7fueml" alt="Beef"/>
                            <div class="category-label">Beef</div>
                        </div>

                        <div className="category-button" onClick={(e)=>setChoice("Poultry")} >
                            <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/12/13/1/FNM_011009-W-N-Dinners-027_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539273224.jpeg" alt="Poultry"/>
                            <div class="category-label">Poultry</div>
                        </div>

                        <div className="category-button" onClick={(e)=>setChoice("Plant-Based Meat ")}>
                            <img src="https://cdn.cleaneatingmag.com/wp-content/uploads/2021/06/MeatSubsititute_Square-Recovered.jpg?width=730" alt="Plant-Based Meat"/>
                            <div class="category-label">Plant-Based Meat</div>
                        </div>

                        <div className="category-button" onClick={(e)=>setChoice("Pork")}>
                            <img src="https://assets.bonappetit.com/photos/5c004e76037f9b5d60b6ca3d/1:1/w_2560%2Cc_limit/bone-in-pork-loin.jpg" alt="Pork"/>
                            <div class="category-label">Pork</div>
                        </div>

                        <div className="category-button" onClick={(e)=>setChoice("Seafood")}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3xLudWs2ucaYDxYuFmiPQG9aTM8QLv0QhjQ&usqp=CAU" alt="Seafood"/>
                            <div class="category-label">Seafood</div>
                        </div>

                    </div> : null
                }

                {selectedCategory === 'dairy' ?  
                <div className = 'sub-choices' id='dairy-choices'>
                    <div className="category-button" onClick={(e)=>setChoice("Milk")}>
                        <img src="https://cdn.store-factory.com/www.culinaide.com/content/product_4801045b.jpg?v=1597660182" alt="Milk"/>
                        <div class="category-label">Milk</div>
                    </div>

                    <div className="category-button" onClick={(e)=>setChoice("Cheese")}>
                        <img src="https://www.foodandwine.com/thmb/9NG3EgwcxSUbNz6sjevgAUgo27k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-909651854-2000-b7d1c594edec480ea838c87ae9463460.jpg" alt="Cheese"/>
                        <div className="category-label">Cheese</div>
                    </div>

                    <div className="category-button" onClick={(e)=>setChoice("Plant-Based Milk")}>
                        <img src="https://www.sciencenews.org/wp-content/uploads/2022/04/050722_milk_feat.jpg" alt="Plant-Based Milk"/>
                        <div className="category-label">Plant-Based Milk</div>
                    </div>

                    <div className="category-button" onClick={(e)=>setChoice("Yoghurt")}>
                        <img src="https://static.toiimg.com/thumb/75220490.cms?width=400&height=300&resizemode=4&imgsize=111038" alt="Yoghurt"/>
                        <div className="category-label">Yoghurt</div>
                    </div>

                </div> : null
                }


                {selectedCategory === 'produce' ?  
                <div className = 'sub-choices' id='produce-choices'>
                    <div className="category-button" onClick={(e)=>setChoice("Fruit")}>
                        <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/collection-of-fruit-on-white-background-nicholas-eveleigh.jpg" alt="Fruits"/>
                        <div className="category-label">Fruits</div>
                    </div>

                    <div className="category-button" onClick={(e)=>setChoice("Vegetable")}>
                        <img src="https://img.freepik.com/premium-photo/vegetables-fruits-isolated-white-background_185193-84591.jpg" alt="Vegetables"/>
                        <div className="category-label">Vegetables</div>
                    </div>

                    <div className="category-button" onClick={(e)=>setChoice("Other-Produce")}>
                        <img src="https://static.vecteezy.com/system/resources/previews/002/251/569/large_2x/collection-of-whole-grains-seeds-isolated-on-white-background-photo.jpg" alt="Other"/>
                        <div className="category-label">Other</div>
                    </div>

                </div> : null
                }

                {selectedCategory === 'others' ?  
                <div className = 'sub-choices' id='other-choices'>
                    <div className="category-button" onClick={(e)=>setChoice("Eggs")}>
                        <img src="https://thumbs.dreamstime.com/b/eggs-white-background-isolated-34128131.jpg" alt="Eggs"/>
                        <div className="category-label">Eggs</div>
                    </div>

                    <div className="category-button" onClick={(e)=>setChoice("Bakery")}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3TmoAI2iKWLfvN1Vrf5JSL6H8P61nCgkbpQ&usqp=CAU" alt="Bakery"/>
                        <div className="category-label">Bakery</div>
                    </div>

                    <div className="category-button" onClick={(e)=>setChoice("Olive-Oil")}>
                        <img src="https://dontmesswithmama.com/wp-content/uploads/2014/11/infused-olive-oil-updated.jpg.webp" alt="Olive Oil"/>
                        <div className="category-label">Olive Oil</div>
                    </div>

                    <div className="category-button" onClick={(e)=>setChoice("Condiments")}>
                        <img src="data:image/jpeg;base64,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" alt="Condiments"/>
                        <div className="category-label">Condiments</div>
                    </div>

                    <div className="category-button" onClick={(e)=>setChoice("Snacks")}>
                        <img src="https://previews.123rf.com/images/279photo/279photo1909/279photo190900722/130138998-bag-of-homemade-potato-chips-for-snack-on-white-background-top-view-copyspace.jpg" alt="Snacks"/>
                        <div className="category-label">Snacks</div>
                    </div>                

                </div> : null
                }   

            </>


        </>
    )
}


export default ChoiceMenu;