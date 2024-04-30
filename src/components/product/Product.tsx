import React, {FC}  from 'react';

export interface IProductProps{
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail?: string,
    images: string[]
}

export type IProductTypeProps = IProductProps & {children?: React.ReactNode};
const Product: FC<IProductTypeProps> = ({
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images
}) =>{
    return(
        <div>
            <h1>{id}. {title} <br/> {description}.</h1>
            <h1>Price: {price}$</h1>
            <h3>Discount Percentage: {discountPercentage} <br/>
                Rating: {rating} <br/>
                Stock: {stock} <br/>
                Brand: {brand} <br/>
                Category: {category} <br/></h3>
            <img src={images[0]} alt={title}/>
        </div>
    );
};

export default Product;