import './Expenses.css';
import '../Card.css';
import ExpensesFilter from "../expansesfilter/ExpensesFilter";

function Expenses() {
    return (
      <div className="expenses card">
          <ExpensesFilter/>
      </div>
    );
}

export default Expenses;