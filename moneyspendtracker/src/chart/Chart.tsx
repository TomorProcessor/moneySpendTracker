import './Chart.css';
import ChartBar from "./chartbar/ChartBar";
import store, {State} from "../StoreReducer";

function Chart() {
    const actSelectedYear: number = 2021; //TODO; get it from option
    const months: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"];
    const monthHeights: Array<number> = [];
    const actualState: State = store.getState();
    const storedYearSpendings: Map<number, number> = new Map<number, number>();
    let maxSpendingValue: number = 0;
    for (let i:number = 0; i < actualState.elements.length; i++) {
        const actYear: number = actualState.elements[i].date.getFullYear();
        if (actYear !== actSelectedYear) continue;
        const actMonth: number = actualState.elements[i].date.getMonth();
        const actAmount: number = actualState.elements[i].amount;
        let actSpendigForMonth: number;
        if (storedYearSpendings.has(actMonth)) {
            actSpendigForMonth = storedYearSpendings.get(actMonth)! + actAmount;
        } else {
            actSpendigForMonth = actAmount;
        }
        storedYearSpendings.set(actMonth, actSpendigForMonth);
        if (actSpendigForMonth > maxSpendingValue) maxSpendingValue = actSpendigForMonth;
    }
    for (let i:number = 0; i < months.length; i++) {
        if (!storedYearSpendings.has(i)) {
            monthHeights.push(0);
        } else {
            monthHeights.push(storedYearSpendings.get(i)! / maxSpendingValue * 100);
        }
    }
    return (
        <div className='chart'>
            {
                months.map(
                  mon => (<ChartBar key={Math.random().toString(36).substring(2)} label={mon} percent={monthHeights[months.indexOf(mon)]}/>)
                )
            }
        </div>
    )
}

export default Chart;