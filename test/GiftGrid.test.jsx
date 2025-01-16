import { screen, render } from "@testing-library/react";
import { GiftGrid } from "../src/components/GiftGrid.jsx";
import { useFetchGifts } from "../src/hooks/useFetchGifts.js";

jest.mock('../src/hooks/useFetchGifts.js');

describe('Pruebas en <GiftGrid/>', () => { 

    const category = 'One Punch'

    test('debe de mostrar el loading inicialmente', () => { 

        const gifts = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://onepunch.com/saitama.jpg'
            },
            {
                id: 'DEF',
                title: 'Goku',
                url: 'https://onepunch.com/goku.jpg'
            }
        ]

        useFetchGifts.mockReturnValue({
            images: gifts,
            isLoading: true
        })
        render(<GiftGrid category={category}/>)
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
     });

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifts', () => {

        const gifts = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://onepunch.com/saitama.jpg'
            },
            {
                id: 'DEF',
                title: 'Goku',
                url: 'https://onepunch.com/goku.jpg'
            }
        ]

        useFetchGifts.mockReturnValue({
            images: gifts,
            isLoading: false
        })
        render(<GiftGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(2);
        expect(screen.getByText(category)).toBeTruthy();
        gifts.forEach(image => {
            expect(screen.getByText(image.title)).toBeTruthy();
        })
            
    }) 
 });