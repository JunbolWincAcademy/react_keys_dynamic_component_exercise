import './App.css'; // this is different
import './components/DrinkItem.css';
//import { DrinkButtons } from './components/DrinkButtons'; //this is different DrinkButtons is not in the ui folder
import { useState } from 'react';
import { DrinkSearch } from './components/DrinkSearch';
// import { DrinkItem } from './components/DrinkItem';
// import { DrinkList } from './components/DrinkList';
import { DrinkChoice } from './components/DrinkChoice';
// import { DrinkItem } from './components/DrinkItem';
import './components/ui/Button.css';

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
          <button className="button" onClick={() => setUserDrink(null)}>Reset the choice</button>
        </>
      ) : (
       
        // if not render the following:
        <>
          <h1>{greeting}</h1>
          {/* <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} /> */}
          <p>Please select a drink</p>
          <DrinkSearch clickFn={setUserDrink} />
          {/* <DrinkList clickFn={setUserDrink} /> // I commented this because it was causing an error.
          Direct inclusion of DrinkList in App was redundant and possibly incorrect because App wasn't passing 
          the required drinks prop to DrinkList, leading to issues. Removing it and letting DrinkSearch handle 
          the rendering and logic for DrinkList simplifies the data flow and ensures components receive the correct props.
          DrinkSearch acts as an intermediary that correctly manages and passes data to DrinkList, 
          ensuring the app functions as intended. This structure avoids direct dependency on App to manage the state 
          and props for DrinkList, streamlining the component hierarchy and data handling.*/}
        </>
      )}
    </div>
  );
};

// NOTES:

// The use of parentheses () is particularly emphasized in scenarios involving conditional rendering with the ternary operator in JSX,
// especially when the expressions span multiple lines or are complex.
