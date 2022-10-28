import { useState, useEffect } from "react"

const AddProduct = () => {

    const [brand, setBrand] = useState('')
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)
    const [price, setPrice] = useState('')
    const [size, setSize] = useState('')
    const [stock, setStock] = useState('')
    const [variation, setVariation] = useState('')
    const [base64,setBase64]= useState('')

    useEffect(() => {
        if (file) {
            console.log(file.size);
            const reader = new FileReader()
            reader.onload = handleReaderLoaded
            reader.readAsDataURL(file)
        }
    }, [file])

    const handleReaderLoaded = (event) => {
        setBase64(event.target.result)
    }

    const add = async () => {
        const product = {
            "brand": brand,
            "title": title,
            "category":category,
            "description":description,
            "file":base64,
            "price":price,
            "size":size,
            "stock":stock,
            "variation":variation
        }

        console.log('wir wollen ein neues Produkt einpflegen',product)

        const response = await fetch('http://localhost:9898/admin/addproduct', {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                'authentication':'Bearer ' + localStorage.getItem('token') 
            },
            body:JSON.stringify(product)
        })

        const data = await response.json()

        if(data.state) {
            setBase64('')
            setBrand('')
            setCategory('')
            setDescription('')
            setTitle('')
            setPrice('')
            setSize('')
            setStock('')
            setVariation('')
        }
    }



    return(
        <article>
            <h1>Add product</h1>

            <input onChange={(e) => { setBrand(e.target.value) }} type="text" placeholder="Brand" />
            <input onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder="Title" />
            <input onChange={(e) => { setCategory(e.target.value) }} type="text" placeholder="Category" />
            <input onChange={(e) => { setDescription(e.target.value) }} type="text" placeholder="Description" />
            <input onChange={(e) => { setFile(e.target.files[0]) }} type="file" />
            <input onChange={(e) => { setPrice(e.target.value) }} type="text" placeholder="Price" />
            <input onChange={(e) => { setSize(e.target.value) }} type="text" placeholder="Size" />
            <input onChange={(e) => { setStock(e.target.value) }} type="number" placeholder="Stock" />
            <input onChange={(e) => { setVariation(e.target.value) }} type="text" placeholder="Variation" />

            <button onClick={add} className="addProductBtn">Add Product </button>

        </article>
    )
}

export default AddProduct