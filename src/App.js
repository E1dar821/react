import { useState,useEffect } from "react";
import { ProductCard } from "./components/ProductCard";

// const products = [
//   {
//     id: 0,
//     name: "Product 1",
//     price: 100,
//     category: "Category 1",
//     img: "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"
//   },
//   {
//     id: 1,
//     name: "Product 2",
//     price: 200,
//     category: "Category 2",
//     img: "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"
//   }
// ];

function App() {
  const [product, setProducts] = useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
  },[])
  return (
    <div>
      {/* <button onClick={()=>setProducts([]})}>123</button> */}
      {product.map((product) => (
        <ProductCard data={product} />
      ))}
    </div>
  );
}

export default App;






