import data from './data.json'
import { useState, useEffect } from 'react';
import Products from './components/products'


function App() {

  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState('')
  const [sort, setSort] = useState('')

  return (
    <body>
      <nav>
        <h1>React Shopping Cart</h1>
        <h1>Admin</h1>
      </nav>

      <main>
        <div className="main">
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
