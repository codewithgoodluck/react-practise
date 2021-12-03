import ExpenseDate from './ExpenseDate';
import Card from './Card';
import React, {useState} from "react"
import './ExpenseItem.css';

function ExpenseItem(props) {

const [title, setTitle]=useState(props.title);
 
  const clickHandler = ()=>{
    setTitle("updated")

  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Button</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
