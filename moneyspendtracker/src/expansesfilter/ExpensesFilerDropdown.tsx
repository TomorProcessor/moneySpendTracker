import store, {State} from "../StoreReducer";

function ExpensesFilerDropdown() {
    const actualState: State = store.getState();
    const storedYears: Array<number> = [];
    for (let i:number = 0; i < actualState.elements.length; i++) {
        if (storedYears.includes(actualState.elements[i].date.getFullYear())) continue;
        storedYears.push(actualState.elements[i].date.getFullYear());
    }
    console.log(storedYears);

    return (
        <select>
            {
                storedYears.map(
                    year => (<option key={Math.random().toString(36).substring(2)}>{year}</option>)
                )
            }
        </select>
    );
}

export default ExpensesFilerDropdown;