import Button from "./button"
function Product ({products}) {
    return (
        <div className="product-card">
            <div className="product-header">
                <img src={products.img} alt={products.name} />
                <h2>{products.name}</h2>
                <h4><strong>{products.price}</strong></h4>
                <p>{products.description}</p>
            </div>
            <div className="product-footer">
                <Button products={products} />
            </div>
        </div>        
    )
}

export default Product
