import {ChangeEvent} from "react";
import {getSortedStoredYears, MODIFY_YEAR} from "../StoreReducer";
import store from "../StoreReducer";
import {useDispatch} from "react-redux";

function ExpensesFilerDropdown() {
    const storedYears: Array<number> = getSortedStoredYears();
    const dispatch = useDispatch();

    const handleSelectChange = (event: ChangeEvent) => {
        dispatch({
            type: MODIFY_YEAR,
            year: parseInt((event.target as HTMLSelectElement).value)
        })
    }

    return (
        <select onChange={handleSelectChange} value={store.getState().year}>
            {
                storedYears.map(
                    year => (<option key={Math.random().toString(36).substring(2)}>{year}</option>)
                )
            }
        </select>
    );
}

export default ExpensesFilerDropdown;