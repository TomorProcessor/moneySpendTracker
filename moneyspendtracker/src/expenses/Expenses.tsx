import './Expenses.css';
import '../Card.css';
import ExpensesFilter from "../expansesfilter/ExpensesFilter";
import Chart from "../chart/Chart";
import store, {DataElement, State} from "../StoreReducer";
import ExpenseItem from "../expenseitem/ExspenseItem";

function Expenses() {
    const expenses: Array<DataElement> = getExpensesForSelectedYear();

    return (
      <div className="expenses card">
          <ExpensesFilter/>
          <Chart />
          {
              expenses.map(
                  expense => (<ExpenseItem key={Math.random().toString(36).substring(2)} item={expense}/>)
              )
          }
      </div>
    );
}

function getExpensesForSelectedYear(): Array<DataElement> {
    const actualYear: number = 2021; //TODO: from parameter!
    const result: Array<DataElement> = [];
    const actualState: State = store.getState();
    for (let i:number = 0; i < actualState.elements.length; i++) {
        if (actualState.elements[i].date.getFullYear() === actualYear) result.push(actualState.elements[i]);
    }
    return result;
}

export default Expenses;