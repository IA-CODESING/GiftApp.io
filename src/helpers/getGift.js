export const getGift = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=vBlxtrcW0AdkuiZpmA7QrO4IyUSbrXBw&q=${ category }&limit=20`
    const resp = await fetch( url );

    const { data } = await resp.json();

    const gift = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gift;
}