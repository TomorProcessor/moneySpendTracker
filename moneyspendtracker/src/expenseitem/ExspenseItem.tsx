import './ExpsenseItem.css';
import '../Card.css';
import ExpenseDate from "./expensedate/ExpenseDate";
import {DataElement, DELETE_ELEMENT} from "../StoreReducer";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import DeleteAlertModal, {DeleteItemModalAnswerType} from "../modal/DeleteAlertModal";

function ExpenseItem(parameter: {item: DataElement}) {
    const desciptionRef = useRef<HTMLHeadingElement>(null);
    const priceRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    let [deleteModalVisible, setDeleteItemVisible] = useState(false);

    useEffect(() => {
       if (desciptionRef.current) desciptionRef.current.innerText = parameter.item.title;
       if (priceRef.current) priceRef.current.innerText = '$' + parameter.item.amount;
    });

    const handleExpenseItemClick = () => {
        setDeleteItemVisible(true);
    }

    const handleModalBtnClick = (answer: DeleteItemModalAnswerType) => {
        if (answer === DeleteItemModalAnswerType.YES) {
            dispatch({
                type: DELETE_ELEMENT,
                id: parameter.item.id
            });
        }
        setDeleteItemVisible(false);
    }

    return (
        <div className='expense-item card'>
            <ExpenseDate date={parameter.item.date}/>
            <div className='expense-item__description' onClick={() => {handleExpenseItemClick()}}>
                <h2 ref={desciptionRef}>x</h2>
            </div>
            <div className='expense-item__price' ref={priceRef}></div>
            {(deleteModalVisible && <DeleteAlertModal onBtnClick={handleModalBtnClick}/>)}
        </div>
    );
}

export default ExpenseItem;