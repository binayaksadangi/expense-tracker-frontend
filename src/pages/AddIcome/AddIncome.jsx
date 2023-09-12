import React from 'react'
import FormComponet from '../../components/Form/Form'
const AddIncome = () => {
  return (
    <div>
        Add Your Earnings
        <FormComponet valuePlaceholder="Amount" keyPlaceholder="Source" transactionType="income"/>
    </div>
  )
}

export default AddIncome