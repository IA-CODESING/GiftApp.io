import { GiftItem } from "./GiftItem";
import { useFetchGift } from "../hooks/useFetchGift";

export const Giftgrid = ( { category } ) => {

    const { images, isLoading } =useFetchGift( category );

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <h2>Cargando....</h2>
            }

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GiftItem 
                            key={ image.id }
                            { ...image }
                        />
                            
                    ))
                } 
            </div>
        </>
    )
}
