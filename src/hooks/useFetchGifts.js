import { useEffect, useState } from "react" 
import { fetchGifts } from "../helpers/fetchGifts"

export const  useFetchGifts=(category)=> {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await fetchGifts(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages()
    },[category])

    return {images, isLoading}
}
