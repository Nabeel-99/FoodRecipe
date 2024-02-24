import React from 'react'
import burger from "../assets/burger.png"
import { faHeart} from "@fortawesome/free-regular-svg-icons"
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContentSection = ({foodData, handleRegenerate, lightMode}) => {
  const spinnerSectionRef = React.useRef(null); 
  return (
    <>
        {foodData.map((food) => (
            <div key={food.id} ref={spinnerSectionRef}>
                 <div className="flex flex-col gap-8 justify-center items-center">
                    <div><h2 className="text-2xl md:text-[48px] md:mt-8">Want to try this?</h2></div>
                    <div className="relative h-[300px]  shadow-2xl rounded-bl-2xl rounded-br-2xl md:w-[484px] md:h-[418px]">
                         <div className="absolute right-0 px-4 py-2"><button><FontAwesomeIcon icon={faHeart} className="w-6 h-6" style={{color: 'white'}}/></button></div>
                         <img src={food.image} className=" object-cover w-[390px] h-[268px] border-r-2 border-l-2 border-t-2 border-white bg-black rounded-tl-md rounded-tr-md md:w-[484px] md:h-[370px]" alt="food Image"/>
                        <div className="bg-black absolute bottom-0 right-0 left-0 h-[33px] w-[390px] border rounded-bl-2xl rounded-br-2xl shadow-2xl flex items-center justify-center md:w-[484px] md:h-[47px]">
                             <p className="font-semibold text-xs">{food.title}</p>
                        </div>
                    </div>
                  <div className="md:flex gap-60 mt-8">
                   <div className="relative rounded-tl-xl">
                     <div className={"absolute h-[40px] w-[390px]  bg-black top-0 right-0 left-0 rounded-tl-xl rounded-tr-xl flex items-center justify-center" }>
                         <h4 className="text-white">Recipes</h4>
                     </div>
                     <div className="bg-white h-[321px] w-[390px] mt-10 overflow-auto rounded-tl-xl rounded-tr-xl md:h-[478px] md:mt-0">
                         <ul className="list-disc leading-loose text-left text-black px-10 mt-14">
                             {food.recipe.map((recipeItem, index) => (
                                <li key={index}>{recipeItem.aisle}</li>
                             ))}
                         </ul>
                     </div>
                   </div>
                   <div className="relative  md:w-[680px] md:mt-8">
                     <div className="absolute h-[40px] w-[390px] top-0 right-0 left-0 bg-black rounded-tl-xl rounded-tr-xl flex items-center justify-center md:w-[680px]" >
                         <h4 className="text-white">Instructions</h4>
                     </div>
                     <div className="bg-white h-[321px] w-[390px] mt-10 overflow-y-scroll rounded-tl-xl rounded-tr-xl md:w-[680px] md:h-[478px] md:mt-0">
                         <ul className="list-disc leading-loose text-left text-black px-10 mt-14">
                            {food.instruction.map((instructionItem, index) => (
                                <li key={index}>{instructionItem.instruction}</li>
                            ))}
                         </ul>
                     </div>
                    
                   </div>
                </div>
                   <div className="md:mt-8">
                     <button className="bg-green-500 text-white p-2 px-5 rounded-xl w-48 font-semibold" onClick={handleRegenerate}><FontAwesomeIcon icon={faArrowsRotate} className="mr-2"/> Re-generate</button>
                   </div>
                 </div>
            </div>
                   
        ))}    
    </>
    
  )
}

export default ContentSection
