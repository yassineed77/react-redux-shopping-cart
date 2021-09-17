export default function Filter({ size, sort, handleSize, handleSort, products }) {
    return(
        <div className="filter">
            <div className="fresult">{products.length} Products</div>
            <div className="fsort">
                Order 
                <select value={sort} >
                    <option>Latest</option>
                    <option value="Lowest">Lowest</option>
                    <option value="Highest">Highest</option>
                </select>
            </div>
            <div className="fsize" value={size} onChange={handleSize} >
                Filter 
                <select value={size} >
                    <option value="ALL">ALL</option>
                    <option value="XS">XS</option>
                    <option value="X">X</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
    )
};
