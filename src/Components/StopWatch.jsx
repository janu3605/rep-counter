import "../Stylings/StopWatch.css"
import { useEffect, useRef, useState } from "react";

function StopWatch() {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);

    function start() {
        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);
        console.log("Start button clicked");
    }

    function stop() {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        console.log("Start button clicked");
    }

    function reset() {
        stop();
        setCount(0);
        console.log("Start button clicked");
    }
    useEffect(() => {
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div>
            <div>
                <div className="container">
                    <div className="digit-wrapper">
                        <div className="digit">{Math.floor(count / 100)}</div>
                        <div className="digit">{Math.floor(count % 100 / 10)}</div>
                        <div className="digit">{count % 10}</div>
                    </div>
                    <div className="buttons">
                        <button onClick={start}>Start</button>
                        <button onClick={stop}>Stop</button>
                        <button onClick={reset}>Reset</button>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default StopWatch;