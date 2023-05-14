import './Expenses.css';
import '../Card.css';
import ExpensesFilter from "../expansesfilter/ExpensesFilter";
import Chart from "../chart/Chart";
import store, {DataElement, State} from "../StoreReducer";
import ExpenseItem from "../expenseitem/ExspenseItem";
import {useMemo, useState} from "react";
import {getSortedStoredYears} from "../Helper";

function Expenses() {
    const [actSelectedYear, setActSelectedYear] = useState(getSortedStoredYears()[0]);
    const expenses: Array<DataElement> = getExpensesForSelectedYear(actSelectedYear);

    const handleDateSelectChange = useMemo (() => (newDate: number) => {
        console.log('Expenses handleDateSelectChange');
        setActSelectedYear(newDate);
    }, []);

    return (
      <div className="expenses card">
          <ExpensesFilter onSelectChange={handleDateSelectChange}/>
          <Chart actualYear={actSelectedYear}/>
          {
              expenses.map(
                  expense => (<ExpenseItem key={Math.random().toString(36).substring(2)} item={expense}/>)
              )
          }
      </div>
    );
}

function getExpensesForSelectedYear(actualYear: number): Array<DataElement> {
    const result: Array<DataElement> = [];
    const actualState: State = store.getState();
    for (let i:number = 0; i < actualState.elements.length; i++) {
        if (actualState.elements[i].date.getFullYear() === actualYear) result.push(actualState.elements[i]);
    }
    return result;
}

export default Expenses;