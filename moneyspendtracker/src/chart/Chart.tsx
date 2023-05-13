import './Chart.css';
import ChartBar from "./chartbar/ChartBar";

function Chart() {
    const months: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"];

    return (
        <div className='chart'>
            {
                months.map(
                  mon => (<ChartBar/>) //TODO: Mon name pass
                )
            }
        </div>
    )
}

export default Chart;