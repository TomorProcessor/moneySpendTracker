import './ExpsenseItem.css';
import '../Card.css';
import ExpenseDate from "./expensedate/ExpenseDate";
import {DataElement, DELETE_ELEMENT} from "../StoreReducer";
import {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";

function ExpenseItem(parameter: {item: DataElement}) {
    const desciptionRef = useRef<HTMLHeadingElement>(null);
    const priceRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    useEffect(() => {
       if (desciptionRef.current) desciptionRef.current.innerText = parameter.item.title;
       if (priceRef.current) priceRef.current.innerText = '$' + parameter.item.amount;
    });

    const handleExpenseItemClick = (itemIdToRemove: string) => {
        //TODO: alert modal
        dispatch({
           type: DELETE_ELEMENT,
           id: itemIdToRemove
        });
    }

    return (
        <div className='expense-item card'>
            <ExpenseDate date={parameter.item.date}/>
            <div className='expense-item__description' onClick={() => {handleExpenseItemClick(parameter.item.id)}}>
                <h2 ref={desciptionRef}>x</h2>
            </div>
            <div className='expense-item__price' ref={priceRef}></div>
        </div>
    );
}

export default ExpenseItem;