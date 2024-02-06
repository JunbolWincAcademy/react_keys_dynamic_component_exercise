

import './DrinkItem.css';
// const groceries = [“Apple”, “Orange”, “Pear”’];


export const DrinkItem = ({ drink }) => {
    return (
        <div className="drink-item">   
           <p>{drink.name}</p> 
          {/* <p>{drink.id}</p>  */}
          <img src={drink.imgUrl} alt={drink.alt}  width={50} height={50} />
          {/* <p>Your {drink.name} will be ready in a few minutes.</p> */}
        </div>
    );
};

