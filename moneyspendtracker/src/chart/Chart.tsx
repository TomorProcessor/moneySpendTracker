import './Chart.css';
import ChartBar from "./chartbar/ChartBar";
import {getMaxSpendingStoredYearSpendings, getStoredYearSpendings} from "../StoreReducer";

function Chart(parameters: { actualYear: number }) {
    const months: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"];
    let monthHeights: Array<number> = [];
    const storedYearSpendings: Map<number, number> = getStoredYearSpendings(parameters.actualYear);
    let maxSpendingValue: number = getMaxSpendingStoredYearSpendings(storedYearSpendings);

    for (let i: number = 0; i < months.length; i++) {
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
                    mon => (<ChartBar key={Math.random().toString(36).substring(2)} label={mon}
                                      percent={monthHeights[months.indexOf(mon)]}/>)
                )
            }
        </div>
    )
}

export default Chart;