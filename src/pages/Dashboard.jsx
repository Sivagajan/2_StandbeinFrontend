import { useState } from "react"
import Home from "../components/home/Home"
import Navigation from "../components/nav/Navigation"
import AllOrderWindow from "../components/order/AllOrderWindow"
import AllProductsWindow from "../components/product/AllProductsWindow"

const Dashboard = () => {

    const [component,setComponent] = useState(< Home />)

    return (
        <>
        <h1>Dashboard</h1>
            <Navigation setcomponent = {setComponent} />
            {component}
        
        </>
    )
}

export default Dashboard