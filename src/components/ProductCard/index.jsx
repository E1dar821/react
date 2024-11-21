import "./index.css";

export function ProductCard(props) {
  const { category, image, title, price } = props.data;

  return (
    <div className="product-card">
      <img width="200px" src={image} />
      <div>{category}</div>
      <h4>{title}</h4>
      <div>$ {price}</div>
      <button>Add to cart</button>
    </div>
  );
}
