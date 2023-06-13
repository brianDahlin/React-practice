import { useState } from "react"
import { IProduct } from "../models"

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
    const [details, setDetails]= useState(false) 

    const btnBgClassName = details ? 'bg-red-400': 'bg-yellow-400' 
    const btnClasses = ['py-2 px-4 border hover:text-white', btnBgClassName]
    
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
           <img src={product.image} className="w-1/6" alt = {product.title}></img>
           <p>{product.title}</p>
           <span className="font-bold "> {product.price} USD</span>
           <button 
            className= {btnClasses.join(" ")}
            onClick={() => setDetails(prev => !prev)}
           >
            {details ?  'Hide Details' : 'Show Details' }
           </button>


             {details && <div>
                <p>{product.description}</p>
             </div>}
            </div>
    )
}