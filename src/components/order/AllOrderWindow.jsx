import { useEffect, useState } from "react"
import OrderItem from "./OrderItem"


const AllOrderWindow = () => {
    
    const [order, setOrder] = useState([])
    
    let result = null
    useEffect(() => {
        const fetchdata = async () => {
            result = await fetch('http://localhost:9898/admin/order')

            if(result.status === 200){
                const data = await result.json()
                setOrder(data)
                console.log({Order: data})
            }
        }

        fetchdata()
    },[])


    return(
        <article className="orderWindow">
            {order.map((item, key) => {
                return(
                    <OrderItem key={key} date={item.date}  orderid={item._id}/>
                )
            })}
        </article>
    )
}

export default AllOrderWindow