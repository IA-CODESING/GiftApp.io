import { useState, useEffect } from "react";
import { getGift } from "../helpers/getGift";




export const useFetchGift = ( category ) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

const getImages = async() => {
    const newImages = await getGift( category )
    setImages( newImages);
    setIsLoading(false)
}

useEffect( () => {
    getImages();
}, [])

    return {
        images,
        isLoading
    }
}
