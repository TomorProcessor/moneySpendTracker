import './ExpenseDate.css';
import {useEffect, useRef} from "react";

function ExpenseDate(parameter: {date: Date}) {
    const monthRef = useRef<HTMLDivElement>(null);
    const yearRef = useRef<HTMLDivElement>(null);
    const dayRef = useRef<HTMLDivElement>(null);

    const months: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    useEffect(() => {
        if (monthRef.current) monthRef.current.innerText = months[parameter.date.getMonth()] + '';
        if (yearRef.current) yearRef.current.innerText = parameter.date.getFullYear() + '';
        if (dayRef.current) dayRef.current.innerText = parameter.date.getDay() + '';
    });

    return (
        <div className='expense-date'>
            <div className='expense-date__month' ref={monthRef}></div>
            <div className='expense-date__year' ref={yearRef}></div>
            <div className='expense-date__day' ref={dayRef}></div>
        </div>
    );
}

export default ExpenseDate;