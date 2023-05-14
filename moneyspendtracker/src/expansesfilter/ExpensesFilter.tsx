import './ExpensesFilter.css';
import ExpensesFilerDropdown from "./ExpensesFilerDropdown";

function ExpensesFilter() {
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <ExpensesFilerDropdown/>
            </div>
        </div>
    );
}

export default ExpensesFilter;