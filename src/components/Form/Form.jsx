import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addIncome } from '../../app/features/addIncome'
// import { addExpense } from path_to_your_expense_reducer; // Replace with the correct path

const FormComponent = ({ keyPlaceholder, valuePlaceholder, transactionType }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    key: "",
    value: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { key, value } = formData;
    
    if (transactionType === "income") {
      dispatch(addIncome({ source: key, amount: value }));
    } else if (transactionType === "expense") {
      dispatch(addExpense({ spentOn: key, amountSpent: value }));
    }

    // Reset the form fields if needed
    setFormData({ key: "", value: "" });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          id="key"
          name="key"
          placeholder={keyPlaceholder}
          variant="outlined"
          type="text"
          value={formData.key}
          onChange={handleInputChange}
        />
        <TextField
          id="value"
          name="value"
          placeholder={valuePlaceholder}
          variant="outlined"
          type="number"
          value={formData.value}
          onChange={handleInputChange}
        />
        <Button type="submit">Add</Button>
      </form>
    </Box>
  );
};

export default FormComponent;
