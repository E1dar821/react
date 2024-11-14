import { ProductCard } from "./components/ProductCard";

const products = [
  {
    id:0,
    name:"Product 1",
    price: 100,
    category:"Category 1",
    imge:"https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"
  },
  {
    id:1,
    name:"Product 1",
    price: 100,
    category:"Category 1",
    imge:"https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"
  }
]

function App() {
  return (
    <div>
      {
        products.map((product)=>(
          <ProductCard />
        ))
      }
    </div>
  );
}

export default App;
