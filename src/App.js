import Card from "./components/UI/Card";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import dateFormat from "./utils/dateFormat";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: dateFormat(new Date(2020, 7, 14)),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: dateFormat(new Date(2021, 6, 28)) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: dateFormat(new Date(2021, 2, 28)),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: dateFormat(new Date(2021, 5, 12)),
    },
  ];

  return (

    <Card className="App">
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date = {expenses[0].date} key={expenses[0].id}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date = {expenses[1].date} key={expenses[1].id}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date = {expenses[2].date} key={expenses[2].id}/>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date = {expenses[3].date} key={expenses[3].id}/>
    </Card>
  );
}

export default App;
