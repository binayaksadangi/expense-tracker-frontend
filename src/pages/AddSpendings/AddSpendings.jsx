import React from 'react'
import FormComponet from '../../components/Form/Form'
import { useSelector } from 'react-redux'
const AddSpendings = () => {
  const expenseData = useSelector((state)=>state.expense.expenseData)
  // console.log(expenseData)
  const monthYearConvert = (monthYear) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthValue = monthYear.split("-")
    const month = months[monthValue[1]]
    const year = monthValue[0]
    const returnString = `${month} ${year}`
    // console.log(month)
    return returnString
   }
  return (
    <div>
        <p>Add your Expenses</p>
        <FormComponet valuePlaceholder="Amount" keyPlaceholder="Spent on" transactionType="expense" />
        {/* Render the ExpensesData */}
   {expenseData && <div>
        <h4>Expenses Data:</h4>
        <ul>
          {expenseData.map((entry) => (
            <li key={entry.monthYear}>
              <h2> {monthYearConvert(entry.monthYear)}</h2>
              <ul>
                {entry.value.map((value, index) => (
                  <li key={index}>
                    {value.spentOn} - {value.amountSpent}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>}
    </div>
  )
}

export default AddSpendings