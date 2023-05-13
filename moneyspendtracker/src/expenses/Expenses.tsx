import './Expenses.css';
import '../Card.css';
import ExpensesFilter from "../expansesfilter/ExpensesFilter";
import Chart from "../chart/Chart";

function Expenses() {
    return (
      <div className="expenses card">
          <ExpensesFilter/>
          <Chart />
      </div>
    );
}

export default Expenses;