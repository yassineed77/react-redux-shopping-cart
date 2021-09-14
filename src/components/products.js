export default function Products ({products}) {
    return(
        <div className="products">
            {products.map(p => {
                return(
                    <div className="product" key={p.id}>
                        <img src={p.image} alt={p.title} />
                        <p>{p.title}</p>
                        <div className="theprice">
                            <h3>${p.price}</h3>
                            <button className="addtocart">Add To Cart</button>
                        </div>
                    </div>
                )
            }
                
            )}
        </div>
    )
}
