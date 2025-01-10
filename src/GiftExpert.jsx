import React from 'react'
import { useState, useEffect } from 'react'
import {GiftGrid} from './components'
import { AddCategory } from './components'


//SHIFT+TAB para regresar bloques de código
export const GiftExpert=()=> {
    const [categorias, setCategorias] = useState(["dragon ball"]);

    const onAddCategory = async(value) => {
        
        setCategorias([value,...categorias])
    }

   

 console.log(categorias)
  return (
    <>
      <AddCategory 
      // estaes la otra forma que tenemos de actualizar el estado desde un componente hijo le pasamos la funciondel set para que la manipule el commponente hijo
      // setCategorias={setCategorias}
      onNewValue={(value)=>onAddCategory(value)}
      
      />
     <h1>categorias</h1>
      {categorias.map((category)=>
       (
          <GiftGrid category={category} key={category}/>
       ))}
      
    </>
  )
}

