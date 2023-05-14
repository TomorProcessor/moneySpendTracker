import './ChartBar.css';
import {useEffect, useRef, useState} from "react";

function ChartBar(parameter: {percent: number, label: string}) {
    const chartBarRef = useRef<HTMLDivElement>(null);
    const chartLabelRef = useRef<HTMLLabelElement>(null);
    const [actualPercent, setActualPercent] = useState(0);

    //run on every percent changes
    useEffect(() => {
        console.log('charbar', parameter.percent);
        setActualPercent(parameter.percent);
        if (chartBarRef.current) {
            chartBarRef.current.style.height = actualPercent + '%';
        }
    }, [parameter.percent, actualPercent]); //still not clear, why to use both variables in dep. array

    //run only once, as label won't change
    useEffect(() => {
        if (chartLabelRef.current) {
            chartLabelRef.current.innerText = parameter.label;
        }
    });

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' ref={chartBarRef}></div>
            </div>
            <label className='chart-bar__label' ref={chartLabelRef}></label>
        </div>
    );
}

export default ChartBar;