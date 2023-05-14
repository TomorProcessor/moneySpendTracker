import {ChangeEvent} from "react";
import {getSortedStoredYears} from "../Helper";

function ExpensesFilerDropdown(parameters: {onSelectChange: (newDate: number) => void}) {
    const storedYears: Array<number> = getSortedStoredYears();

    const handleSelectChange = (event: ChangeEvent) => {
        console.log('ExpensesFilterDropdown handleSelectOnChange');
        parameters.onSelectChange(parseInt((event.target as HTMLSelectElement).value));
    }

    return (
        <select onChange={handleSelectChange}>
            {
                storedYears.map(
                    year => (<option key={Math.random().toString(36).substring(2)}>{year}</option>)
                )
            }
        </select>
    );
}

export default ExpensesFilerDropdown;