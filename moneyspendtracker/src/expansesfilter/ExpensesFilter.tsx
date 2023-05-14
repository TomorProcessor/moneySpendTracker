import './ExpensesFilter.css';
import ExpensesFilerDropdown from "./ExpensesFilerDropdown";
import {memo} from "react";

function ExpensesFilter(parameters: {onSelectChange: (newDate: number) => void}) {
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <ExpensesFilerDropdown onSelectChange={parameters.onSelectChange}/>
            </div>
        </div>
    );
}

export default memo(ExpensesFilter);