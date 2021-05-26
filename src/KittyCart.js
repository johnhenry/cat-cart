const KittyCart = ({ cart })=>{
  let total = 0;
  const cats = {};
  for(const {id, name, image, price} of cart){
    cats[id] = cats[id] || {
      name,
      image,
      price: 0,
      quantity: 0
    };
    total += cats[id].price += Number(price);
    cats[id].quantity += 1;
  }
  const kitties = [];
  for(const [id, {name, image, price, quantity}] of Object.entries(cats)){
    kitties.push(<div className="kitty" key={id}>
    <span className="title">{name}</span>
    <span className="price">{price}</span>
    <span className="quantity">{quantity}</span>
    <img src={image} alt={`cat pic ${name}`}></img>
  </div>);
  }

  return (
    <div>
      <div className="kitty-cart">{kitties}</div>
      <div className="total">{total}</div>
    </div>
  )
};

export default KittyCart;
