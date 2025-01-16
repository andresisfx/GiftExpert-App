import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../src/components/AddCategory.jsx";


describe('Pruebas en <AddCategory/>', () => { 

    const inputValue = 'One Punch';

    test('debe de cambiar el valor de la caja de texto', () => { 
        
        render(<AddCategory onNewValue={ () => {}} />)
        const input = screen.getByRole('textbox')
        fireEvent.input(input, {target: {value: 'One Punch'}})
        expect(input.value).toBe('One Punch')
        // screen.debug()
    });

    test('debe de llamar onNewValue si el input tiene un valor', () => { 
        
        
        const onNewValue = jest.fn()
        render(<AddCategory onNewValue={onNewValue}/>)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.submit(form)
        expect(onNewValue).toHaveBeenCalled()
        expect(onNewValue).toHaveBeenCalledTimes(1)
        expect(onNewValue).toHaveBeenCalledWith(inputValue)
    });

    test('no debe de llamar onNewValue si el input esta vacio', () => { 
        
        
        const onNewValue = jest.fn()
        render(<AddCategory onNewValue={onNewValue}/>)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, {target: {value: ''}})
        fireEvent.submit(form)
        // expect(onNewValue).toHaveBeenCalledTimes(0)
        expect(onNewValue).not.toHaveBeenCalled()
    });

});  
