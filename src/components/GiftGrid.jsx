import React, {useState, useEffect } from 'react'
import {GiftItem} from './GiftItem';
import {useFetchGifts} from '../hooks/useFetchGifts'
import proptypes from 'prop-types';

export const GiftGrid=({category})=> {
  
  
const {images, isLoading} = useFetchGifts(category)

console.log("images GiftGrid",images)

console.log ("Here category",category)
      return (
        <>
            <h3>{category}</h3>

            {
                isLoading && ( <h2>Cargando...</h2> )
            }
        
            <div className="card-grid">
                  {
                      images.map((image)=> 
                      (
                        <GiftItem
                         key={image.id} 
                         {...image}/>
                      )
                      )
                  }
                
            </div>
        </>
      )
}

GiftGrid.proptypes={
    category:proptypes.string.isRequired
}