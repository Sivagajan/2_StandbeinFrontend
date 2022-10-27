import { useEffect, useState } from "react"
import AddProduct from "./AddProduct"
import ProductItem from './ProductItem'

const AllProductsWindow = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {

        let result = null

        const fetchdata = async () => {
            result = await fetch('http://localhost:9898/admin/product', {headers: {
                Authentication: 'Bearer ' + localStorage.getItem('token')
            }})

            if(result.status === 200){
                const data = await result.json()
                setProduct(data)
                console.log({Product: data})
            }
        }
        fetchdata()
        
    },[])

    return(
        <>
            <article className="productWindow">
                {product.map((item, key) => {
                    
                    return(
                        
                        < ProductItem key={key}image={item.image} title={item.title} size={item.size} price={item.price}/>
                        )})}
            </article>
        </>
    )
}

export default AllProductsWindow