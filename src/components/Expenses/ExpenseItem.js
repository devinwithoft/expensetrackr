import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from "../Expenses/ExpenseDate.js";
import Card from "../UI/Card.js";


function ExpenseItem(props) {
  const [title, SetTitle] = useState(props.title);

  const clickHandler = () => {

  };


  return (<div className="expense-item">
    <ExpenseDate date={props.date} />
    <Card className="expense-item__description">
      <h2>
        {props.title}
      </h2>
      <div className="expense-item__price">{props.amount}</div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  </div>
  );
}


export default ExpenseItem;