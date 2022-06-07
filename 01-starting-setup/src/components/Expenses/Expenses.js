import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterYear, setFilterdYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  //filter for the year
  const fileredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={fileredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
