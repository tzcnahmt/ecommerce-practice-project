import React, { useEffect, useState } from 'react';
import CardView from './components/Product/CardView/CardView';

const ThemeContext = React.createContext();

export default function App() {
  const [products, setProducts] = useState([{}]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts((prev) => (prev[0] = data)));
  }, []);

  useEffect(() => {
    console.log(products);
  }, []);

  return (
    <ThemeContext.Provider value={products}>
      <div className='max-w-full border-b-2'>
        <nav className='flex justify-between align-middle max-w-7xl mx-auto '>
          <div className='logo text-2xl'>Logo</div>
          <div className='nav-links flex items-center '>
            <ul className='flex items-center'>
              <li className='h-12 px-5 border-l-2 flex items-center'>
                <a href='#'>Cart</a>
              </li>
              <li className='h-12 px-5 border-l-2 flex items-center'>
                <a href='#'>Categories</a>
              </li>
              <li className='h-12 px-5 border-l-2 flex items-center'>
                <a href='#'>All Products</a>
              </li>
              <li className='h-12 px-5 border-l-2 flex items-center'>
                <a href='#'>Login</a>
              </li>
              <li className='h-12 px-5 border-l-2 border-r-2 flex items-center'>
                <a href='#'>Sign up</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {products.map((product, index) => {
        return (
          <CardView
            key={index}
            title={product.title}
            categories={product.category.name}
            price={product.price}
            // image={product.images[0]}
          />
        );
      })}
    </ThemeContext.Provider>
  );
}
