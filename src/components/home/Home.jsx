import AllOrderWindow from "../order/AllOrderWindow"
import AllProductsWindow from "../product/AllProductsWindow"

const Home = () => {

    return(
        <section className="dashboardSection">
            <AllProductsWindow />
            <AllOrderWindow/>
        </section>
    )
}

export default Home