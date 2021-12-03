import React from 'react'
import "./NewExpenses.css"
import ExpenseForm from "./ExpenseForm"

const NewExpenses = (props) => {
    const onSaveExpenseData =(enteredExpenseData)=>{
        const expeseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        console.log(expeseData)
      props.onAddExpenses(expeseData)
    }
   

    return (
        <div>
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData ={onSaveExpenseData}></ExpenseForm>
            </div>
        </div>
    )
}

export default NewExpenses
