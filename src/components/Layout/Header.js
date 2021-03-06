import React from "react";

import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ShenzhenMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']} >
        <img src={mealsImage} alt="Meals on the table"/>
      </div>
    </React.Fragment>
  )
};

export default Header; 