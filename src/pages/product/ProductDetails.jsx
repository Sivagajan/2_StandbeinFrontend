import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const params = useParams()

    useEffect(() => {
        fetch('http://localhost:9898/admin/product'+params.id,{
            header:{
                'authentication':'Bearer ' + localStorage.getItem('token')
            }
        })
    })
}