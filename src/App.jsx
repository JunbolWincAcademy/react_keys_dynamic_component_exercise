import './App.css'; // this is different
import './components/DrinkItem.css';
//import { DrinkButtons } from './components/DrinkButtons'; //this is different DrinkButtons is not in the ui folder
import { useState } from 'react';
import { DrinkSearch } from './components/DrinkSearch';
// import { DrinkItem } from './components/DrinkItem';
import { DrinkList } from './components/DrinkList';
import { DrinkChoice } from './components/DrinkChoice';
import { DrinkItem } from './components/DrinkItem';

export const App = () => {
  const greeting = 'Welcome to our cafe!';

  //In the App.jsx file, pass two props to the <DrinkButtons /> component: drinkOne with the tea object name and
  //drinkTwo with the coffee object name.

  //While writing the object names, auto import the objects, or manually import them.

  //Create a new const userDrink and assign it the tea or coffee object.

  const [userDrink, setUserDrink] = useState(null);
  //  const userDrink = drink;
  return (
    <div className="App">
      {userDrink ? (
        <>
          <h1>{greeting}</h1>
          {/* // Only render DrinkChoice if a drink is selected */}
          <DrinkChoice drink={userDrink} />
        </>
      ) : (
       
        // if not render the following:
        <>
          <h1>{greeting}</h1>
          {/* <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} /> */}
          <p>Please select a drink</p>
          <DrinkSearch clickFn={setUserDrink} />
          <DrinkList clickFn={setUserDrink} />
        </>
      )}
    </div>
  );
};

// NOTES:

// The use of parentheses () is particularly emphasized in scenarios involving conditional rendering with the ternary operator in JSX,
// especially when the expressions span multiple lines or are complex.
