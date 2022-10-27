import Home from "../home/Home"
import Order from "../order/Order";
import Products from "../product/Products";
import AllUserWindow from '../user/AllUserWindow'

const Navigation = (props) => {

    const navigateTo = (e) => {
        switch(e.target.innerText) {
            case 'Dashboard': 
                props.setcomponent(<Home />)
                break;
            case 'Products':
                props.setcomponent(< Products />)
                break;
            case 'Orders':
                props.setcomponent(< Order />)
                break;
            case 'Users':
                props.setcomponent(< AllUserWindow />)
        }
    }

    return(
        <nav className="DashNav" onClick={navigateTo}>
            <p className="navButton">Dashboard</p>
            <p className="navButton">Products</p>
            <p className="navButton">Orders</p>
            <p className="navButton">Users</p>
        </nav>
    )
}
export default Navigation