import { screen, render } from '@testing-library/react';
import { GiftItem } from '../src/components/GiftItem';

describe('Pruebas en GiftItem', () => { 
   
    const title='Hola Mundo'
    const url='https://localhost/algo.jpg'

    test('debe de hacer match con el snapshot', () => { 
        
        
        const {container}= render(<GiftItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
     });

    test( 'debe de mostrar la imagen con el url y el alt indicado', () => { 
        
        render (<GiftItem title={title} url={url} />)
        //screen.debug();
        // expect(screen.getByRole('img')).toBeTruthy();
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
       
     }); 

    test( 'debe de mostrar el titulo en el componente', () => { 
        
        render (<GiftItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy();
     });     
 })