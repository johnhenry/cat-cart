const MAX = 3;
const KittyGrid = ({ data, updateCart })=>{
  const kitties = [];
  for(const {id, createdAt, name, image, price} of data){
    kitties.push(<div id={'kitty_' +id} data-created-at={createdAt} className="kitty" key={id}>
      <span className="title">{name}</span>
      <img src={image} alt={`cat pic ${name}`}></img>
      <button onClick={()=>updateCart((cart)=>{
        if(cart.length < MAX && !cart.find((kitty)=>kitty.id === id)){
          return [...cart, {id, name, price}];
        }else{
          window.alert('Too many of Cats!');
          return cart;
        };
      })} >Add to Cart</button> <span className="price">{price}</span>
    </div>)
  }
  return <div className="kitty-grid">{kitties}</div>
};

export default KittyGrid;
