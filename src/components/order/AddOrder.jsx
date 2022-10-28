import { useState } from "react"

const AddOrder = () => {
    const [date, setDate] = useState('')
    const [state, setState] = useState(false)
    const [price, setPrice] = useState('')
    const [customer, setCustomer] = useState('')
    const [product, setProduct] = useState('')


    const add = async () => {

        const order = {
            "date":date,
            "state":state,
            "price": price,
            "customer":customer,
            "product":product
        }

        console.log('we want to ad a order',order)

        const response = await fetch('http://localhost:9898/admin/addorder', {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                'authentication':'Bearer ' + localStorage.getItem('token') 
            },
            body:JSON.stringify(order)
        })

        const data = await response.json()

        if(data.state) {
            setDate('')
            setState('')
            setPrice('')
            setCustomer('')
            setProduct('')
        }
        

    }

    return(
        <section>
            <h1>Add Order</h1>

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