import data from './data.json'
import { useState, useEffect } from 'react';
import Products from './components/products'
import Filter from './components/filter';


function App() {

  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState('');
  const [sort, setSort] = useState('');

  // useEffect(() => {
  //   setSize(products.length)
  // }, [products.length])

  // function handleSort(e){
  //   setSort(e.target.value)
  //   setProducts(
  //     data.products.slice().sort((a, b) =>
  //       sort === 'lowest'
  //         ? a.price > b.price
  //           ? 1
  //           : -1
  //         : sort === 'highest'
  //         ? a.price > b.price
  //           ? 1
  //           : -1
  //         ? a._id > b._id
  //           ? 1
  //           : -1
        
  //     )
  //   )
  // }

  function handleSize(e) {
    if(e.target.value === 'ALL'){
      setSize(e.target.value)
      setProducts(data.products)
    } else {
      setSize(e.target.value)
      setProducts(data.products.filter(p => p.availableSizes.indexOf(e.target.value) >= 0))
    }
  }

  return (
    <body>
      <nav>
        <h1>React Shopping Cart</h1>
        <h1>Admin</h1>
      </nav>

      <main>
        <div className="main">
          <Filter size={size} sort={sort} handleSize={handleSize} products={products} />
          <hr />
          <Products products={products} />
        </div>
        <div className="thecart">the cart</div>
      </main>

      <footer>
        <h3>footer</h3>
      </footer>
    </body>
  );
}

export default App;
