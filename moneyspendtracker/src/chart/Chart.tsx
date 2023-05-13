import './Chart.css';
import ChartBar from "./chartbar/ChartBar";

function Chart() {
    const months: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"];
    const x = 52;

    return (
        <div className='chart'>
            {
                months.map(
                  mon => (<ChartBar key={Math.random().toString(36).substring(2)} label={mon} percent={x}/>)
                )
            }
        </div>
    )
}

export default Chart;