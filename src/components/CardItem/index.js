import "./index.css"

const CardItem = ({item,Increase,Decrease}) => {
    
    const {title,image,price,description,quantity,id}=item

    const IncreaseQuantity=()=>{
        Increase(id)
    }

    const DecreaseQuantity=()=>{
        Decrease(id)
    }

  return(  <div className="card-container">
    <h2 className="card-title">{title}</h2>
    <img src={image} className="card-img" alt=""/>
    <p className="card-desc">{description}</p>
    <p className="card-price">{price}.Rs</p>
    <div className="btn-container">
        <button className="btn btn-secondary btn-sm" onClick={DecreaseQuantity}>-</button>
        <p>{quantity}</p>
        <button className="btn btn-secondary btn-sm " onClick={IncreaseQuantity}>+</button>
    </div>
</div>



)
}

export default CardItem

