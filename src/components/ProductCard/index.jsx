import "./index.css";

export function ProductCard(props) {
  const { category, image, title, price } = props.data;

  return (
    <div className="product-card">
      <img width="200px" height="200px" src={image} />
      <div className="category">{category}</div>
      <div className="title"><h4>{title}</h4></div>
      <div className="price"> <b>$ {price}</b></div>
      <button>Add to Card</button>
    </div>
  );
}
