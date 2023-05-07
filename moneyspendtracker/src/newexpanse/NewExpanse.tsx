import './NewExpense.css';
import './ExpenseForm.css';
import {useRef, useState} from "react";
import {DataElement} from "../StoreReducer";
function NewExpanse() {
    const [showForm, modifyFormVisibilityState] = useState(false);
    const [canAddNew, changeCanAddNew] = useState(false);

    const handleAddNewClick = () => {
        modifyFormVisibilityState(true);
    }

    const handleCancelClick = () => {
        modifyFormVisibilityState(false);
    }

    const handleInputChange = () => {
        changeCanAddNew(inputsAreValid());
    }

    const handleAddExpenseClick = () => {
        const newExpense: DataElement = {
            id: Math.random().toString(36).substring(2),
            title: titleInputRef.current!.value,
            amount: parseInt(amountInputRef.current!.value),
            date: new Date(dateInputRef.current!.value)
        }
        console.log(newExpense);
    }

    const titleInputRef = useRef<HTMLInputElement>(null);
    const amountInputRef = useRef<HTMLInputElement>(null);
    const dateInputRef = useRef<HTMLInputElement>(null);

    const inputsAreValid = () => {
        // Check if the refs are not null
        if (
            titleInputRef.current &&
            amountInputRef.current &&
            dateInputRef.current
        ) {
            // Use strict equality and isNaN function
            return (
                titleInputRef.current.value !== "" &&
                !isNaN(parseFloat(amountInputRef.current.value)) &&
                dateInputRef.current.value !== ""
            );
        }
        // Return false if any ref is null
        return false;
    };

    return (
      <div className="new-expense">
          { (!showForm && <button onClick={handleAddNewClick}>Add New Expanse</button>) ||
              (showForm && <div className="new-expense__controls">
                  <label>Title</label>
                  <input ref={titleInputRef} onChange={handleInputChange}/>
                  <label>Amount</label>
                  <input ref={amountInputRef} onChange={handleInputChange}/>
                  <label>Date</label>
                  <input type="date" ref={dateInputRef} onChange={handleInputChange}/>
                  <button className="new-expense__actions" onClick={handleCancelClick}>Cancel</button>
                  <button className="new-expense__actions" disabled={!canAddNew} onClick={handleAddExpenseClick}>Add Expense</button>
              </div>)
          }
      </div>
    );
}

export default NewExpanse;