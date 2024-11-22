import { useState,useEffect } from "react";
import { ProductCard } from "./components/ProductCard";



function App() {
  const [loading, setLoading] = useState(true)
  const [product, setProducts] = useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            .finally(() => setLoading(false))
  },[])
  return (
    <div>
      {loading && <div>Loading...</div>}
      {product.map((product) => (
        <ProductCard data={product} />
      ))}
    </div>
  );
}

export default App;






