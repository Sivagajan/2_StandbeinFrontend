import { useState } from "react"

const AddOrder = () => {
    const [date, setDate] = useState('')
    const [state, setState] = useState(false)
    const [price, setPrice] = useState('')
    const [customer, setCustomer] = useState('')
    const [product, setProduct] = useState([])


    const add = () => {

        const order = {
            "date":date,
            "state":state,
            "price": price,
            "customer":customer,
            "product":product
        }

        console.log(order)
    }

    return(
        <section>
            <h1>Add product</h1>

            <input onChange={(e) => { setDate(e.target.value) }} type="text" placeholder="Date" />
            <input type="checkbox" onChange={(e) => { setState(e.target.checked) }} />
            <input onChange={(e) => { setPrice(e.target.value) }} type="text" placeholder="Price" />
            <input onChange={(e) => { setCustomer(e.target.value) }} type="text" placeholder="Customer" />
            <input onChange={(e) => { setProduct(e.target.value) }} type="text" placeholder="product" />


            <button onClick={add} className="addProductBtn">Add Order </button>

        </section>
    )
}

export default AddOrder