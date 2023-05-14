import './ExpsenseItem.css';
import '../Card.css';
import ExpenseDate from "./expensedate/ExpenseDate";
import {DataElement} from "../StoreReducer";
import {useEffect, useRef} from "react";

function ExpenseItem(parameter: {item: DataElement}) {
    const desciptionRef = useRef<HTMLHeadingElement>(null);
    const priceRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
       if (desciptionRef.current) desciptionRef.current.innerText = parameter.item.title;
       if (priceRef.current) priceRef.current.innerText = '$' + parameter.item.amount;
    });

    return (
        <div className='expense-item card'>
            <ExpenseDate date={parameter.item.date}/>
            <div className='expense-item__description'>
                <h2 ref={desciptionRef}>x</h2>
            </div>
            <div className='expense-item__price' ref={priceRef}></div>
        </div>
    );
}

export default ExpenseItem;