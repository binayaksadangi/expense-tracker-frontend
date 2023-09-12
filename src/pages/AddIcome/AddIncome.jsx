import React from 'react'
import FormComponet from '../../components/Form/Form'
import { useSelector } from 'react-redux'

const AddIncome = () => {
  const incomeData =useSelector((state)=>state.addIncome.incomeData)
  const totalSaving = useSelector((state)=>state.saving.totalSavings)
  const totalEarnings = useSelector((state)=>state.addIncome.totalIncome)
  
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
      <h3>Total Savings: {totalSaving}</h3>
      <h3>Total Earnings: {totalEarnings}</h3>
      <p>Add Your Earnings</p>

      <FormComponet valuePlaceholder="Amount" keyPlaceholder="Source" transactionType="income" />
      
    {/* Render the incomeData */}
   {incomeData && <div>
        <h4>Income Data:</h4>
        <ul>
          {incomeData.map((entry) => (
            <li key={entry.monthYear}>
              <h2> {monthYearConvert(entry.monthYear)}</h2>
              <ul>
                {entry.values.map((value, index) => (
                  <li key={index}>
                    {value.source} - {value.amount}
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

export default AddIncome