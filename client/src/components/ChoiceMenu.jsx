import React, {useState} from 'react'


function ChoiceMenu() {


    const [selectedCategory, setSelectedCategory] = useState(null)



    return (


        <>
        {/* main choice menu */}
            <div class='disp-container'>
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
                    <div class = 'sub-choices' id='meat-choices'>
                        <div class="category-button">
                            <img src="https://embed.widencdn.net/img/beef/hmla7wxlvl/1120x1120px/Beef_Lifestyle_190716_0868.tif?keep=c&u=7fueml" alt="Beef"/>
                            <div class="category-label">Beef</div>
                        </div>

                        <div class="category-button">
                            <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/12/13/1/FNM_011009-W-N-Dinners-027_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539273224.jpeg" alt="Poultry"/>
                            <div class="category-label">Poultry</div>
                        </div>

                        <div class="category-button">
                            <img src="https://cdn.cleaneatingmag.com/wp-content/uploads/2021/06/MeatSubsititute_Square-Recovered.jpg?width=730" alt="Plant-Based Meat"/>
                            <div class="category-label">Plant-Based Meat</div>
                        </div>

                        <div class="category-button">
                            <img src="https://assets.bonappetit.com/photos/5c004e76037f9b5d60b6ca3d/1:1/w_2560%2Cc_limit/bone-in-pork-loin.jpg" alt="Pork"/>
                            <div class="category-label">Pork</div>
                        </div>

                        <div class="category-button">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3xLudWs2ucaYDxYuFmiPQG9aTM8QLv0QhjQ&usqp=CAU" alt="Seafood"/>
                            <div class="category-label">Seafood</div>
                        </div>

                    </div> : null
                }

                {selectedCategory === 'dairy' ?  
                <div class = 'sub-choices' id='dairy-choices'>
                    <div class="category-button">
                        <img src="https://cdn.store-factory.com/www.culinaide.com/content/product_4801045b.jpg?v=1597660182" alt="Milk"/>
                        <div class="category-label">Milk</div>
                    </div>

                    <div class="category-button">
                        <img src="https://www.foodandwine.com/thmb/9NG3EgwcxSUbNz6sjevgAUgo27k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-909651854-2000-b7d1c594edec480ea838c87ae9463460.jpg" alt="Cheese"/>
                        <div class="category-label">Cheese</div>
                    </div>

                    <div class="category-button">
                        <img src="https://www.sciencenews.org/wp-content/uploads/2022/04/050722_milk_feat.jpg" alt="Plant-Based Milk"/>
                        <div class="category-label">Plant-Based Milk</div>
                    </div>

                    <div class="category-button">
                        <img src="https://static.toiimg.com/thumb/75220490.cms?width=400&height=300&resizemode=4&imgsize=111038" alt="Yoghurt"/>
                        <div class="category-label">Yoghurt</div>
                    </div>

                </div> : null
                }


                {selectedCategory === 'produce' ?  
                <div class = 'sub-choices' id='produce-choices'>
                    <div class="category-button">
                        <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/collection-of-fruit-on-white-background-nicholas-eveleigh.jpg" alt="Fruits"/>
                        <div class="category-label">Fruits</div>
                    </div>

                    <div class="category-button">
                        <img src="https://img.freepik.com/premium-photo/vegetables-fruits-isolated-white-background_185193-84591.jpg" alt="Vegetables"/>
                        <div class="category-label">Vegetables</div>
                    </div>

                    <div class="category-button">
                        <img src="https://static.vecteezy.com/system/resources/previews/002/251/569/large_2x/collection-of-whole-grains-seeds-isolated-on-white-background-photo.jpg" alt="Other"/>
                        <div class="category-label">Other</div>
                    </div>

                </div> : null
                }

                {selectedCategory === 'others' ?  
                <div class = 'sub-choices' id='other-choices'>
                    <div class="category-button">
                        <img src="https://cdn.store-factory.com/www.culinaide.com/content/product_4801045b.jpg?v=1597660182" alt="Eggs"/>
                        <div class="category-label">Eggs</div>
                    </div>

                    <div class="category-button">
                        <img src="https://www.foodandwine.com/thmb/9NG3EgwcxSUbNz6sjevgAUgo27k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-909651854-2000-b7d1c594edec480ea838c87ae9463460.jpg" alt="Bakery"/>
                        <div class="category-label">Bakery</div>
                    </div>

                    <div class="category-button">
                        <img src="https://www.foodandwine.com/thmb/9NG3EgwcxSUbNz6sjevgAUgo27k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-909651854-2000-b7d1c594edec480ea838c87ae9463460.jpg" alt="Olive Oil"/>
                        <div class="category-label">Olive Oil</div>
                    </div>

                    <div class="category-button">
                        <img src="https://www.foodandwine.com/thmb/9NG3EgwcxSUbNz6sjevgAUgo27k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-909651854-2000-b7d1c594edec480ea838c87ae9463460.jpg" alt="Condiments"/>
                        <div class="category-label">Condiments</div>
                    </div>

                    <div class="category-button">
                        <img src="https://www.foodandwine.com/thmb/9NG3EgwcxSUbNz6sjevgAUgo27k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-909651854-2000-b7d1c594edec480ea838c87ae9463460.jpg" alt="Snacks"/>
                        <div class="category-label">Snacks</div>
                    </div>                

                </div> : null
                }   

            </>


        </>
    )
}


export default ChoiceMenu;