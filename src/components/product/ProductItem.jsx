const ProductItem = (props) => {

    console.log(props.title)

    return (
        <article className="productArticle">
        <img className="productImage" src={props.image} alt="" />
        <p>{props.title}</p>
        <p>Größe :{props.size}</p>
        <p>Preis : {props.price}€</p>
        </article>
    )
}

export default ProductItem