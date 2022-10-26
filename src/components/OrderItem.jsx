const OrderItem = (props) => {
    console.log(props.date)

    return(
        <article>
            <p>{props.orderid}</p>
            <p>{props.date}</p>
        </article>
    )
}
export default OrderItem