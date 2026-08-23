function Product({key,name,price,inStock}){
    return (
        <div>
            <h5>{key}</h5>
     <h3>{name}</h3>
     <p>Price:{price}</p>
     <p>{ inStock ? "Stock in" : "out of stock" }</p>
        </div>
    )
}
export default Product;