import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../src/components/AddCategory.jsx";


describe('Pruebas en <AddCategory/>', () => { 
    test('debe de cambiar el valor de la caja de texto', () => { 
        
        render(<AddCategory onNewValue={ () => {}} />)
        const input = screen.getByRole('textbox')
        fireEvent.input(input, {target: {value: 'One Punch'}})
        expect(input.value).toBe('One Punch')
        // screen.debug()


    });

});  
