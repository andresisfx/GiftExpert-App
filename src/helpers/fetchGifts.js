

export const fetchGifts= async(category)=>{

    const url=`https://api.giphy.com/v1/gifs/search?q=${(category)}&limit=10&api_key=yqNHXNPW7Fmcdo3Wd3zrn1xDyohIyExO`
    const response= await fetch(url)
    const {data} = await response.json()
    const gifts= data.map((img)=>(
       { 
            title:img.title,
            url:img.images.downsized_medium.url,
            id:img.id
       }
    ))
    return gifts
}