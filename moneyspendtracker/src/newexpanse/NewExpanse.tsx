import './NewExpense.css';
import './ExpenseForm.css';
import {useState} from "react";
function NewExpanse() {
    const [showForm, modifyFormVisibilityState] = useState(false);

    const handleAddNewClick = () => {
        modifyFormVisibilityState(true);
    }

    const handleCancelClick = () => {
        modifyFormVisibilityState(false);
    }

    return (
      <div className="new-expense">
          { (!showForm && <button onClick={handleAddNewClick}>Add New Expanse</button>) ||
              (showForm && <div className="new-expense__controls">
                  <label>Title</label>
                  <input/>
                  <label>Amount</label>
                  <input/>
                  <label>Date</label>
                  <input type="date"/>
                  <button className="new-expense__actions" onClick={handleCancelClick}>Cancel</button>
                  <button className="new-expense__actions">Add Expense</button>
              </div>)
          }
      </div>
    );
}

export default NewExpanse;