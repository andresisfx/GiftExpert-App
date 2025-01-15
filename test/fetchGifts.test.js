import { fetchGifts } from "../src/helpers/fetchGifts"

describe('Pruebas en fetchGifts', () => { 
    test('debe retornar un arreglo de gifs', async() => { 
        
        const gifs= await fetchGifts('One Punch')
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })

     });

    
    });