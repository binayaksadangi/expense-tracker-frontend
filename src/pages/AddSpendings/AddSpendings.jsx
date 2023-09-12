import React from 'react'
import FormComponet from '../../components/Form/Form'

const AddSpendings = () => {
  return (
    <div>
        <p>Add your Expenses</p>
        <FormComponet valuePlaceholder="Amount" keyPlaceholder="Spent on" transactionType="expense" />
    </div>
  )
}

export default AddSpendings