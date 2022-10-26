import { useEffect, useState } from "react"
import ProductItem from './ProductItem'

const AllProductsWindow = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {

        let result = null

        const fetchdata = async () => {
            result = await fetch('http://localhost:9898/admin/product')

            if(result.status === 200){
                const data = await result.json()
                setProduct(data)
                console.log({Product: data})
            }
        }
        fetchdata()
        
    },[])

    return(
        <section>
            {product.map((item, key) => {

                return(
                    
                    < ProductItem key={key}image={item.image} title={item.title} size={item.size} price={item.price}/>
                )})}
        </section>
    )
}

export default AllProductsWindow