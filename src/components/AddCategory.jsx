import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
export const AddCategory=({onNewValue})=> {

    const [inputValue, setInputValue] = useState('');
  const  handleInputChange=({target})=>{
         setInputValue(target.value)
    }
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        const valueSpaced=inputValue.trim();
        if(valueSpaced.length<=2)return
        // de esta forma se recibe la funcion del estado y se la actualiza con el input value El callback recibe el valor más actualizado del estado anterior como argumento Cuando la nueva actualización depende directamente del estado anterior, como agregar un elemento a una lista.
        
       // setCategorias(categorias=>[inputValue,...categorias])

        onNewValue(valueSpaced.trim());
        setInputValue('')
    }
  return (
    <form onSubmit={handleOnSubmit} aria-label='form'>
      <input 
      type="text"
      placeholder='Buscar gifs'
      name='search'
      value={inputValue}
      onChange={handleInputChange}
       />
    </form>
  )
}

AddCategory.propTypes = {
  onNewValue:PropTypes.func.isRequired
}