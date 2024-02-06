import './DrinkItem.css';

export const DrinkItem = ({ drink, clickFn }) => {
  return (
    <button className="drink-item" onClick={() => clickFn(drink)}>
      <img src={drink.imgUrl} alt={drink.alt} width={50} height={50} />
      <p>{drink.name}</p>
    </button>
  );
};
