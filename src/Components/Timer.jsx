import "../Stylings/Timer.css";
import React from "react";
import { useState, useRef } from "react";

function Timer() {
    const [count, setCount] = useState(0);
    const digitwrapperRef = useRef(null);

    const handleClick = () => {
        setCount(prev => {
            const next = prev < 5 ? prev + 1 : 0;
            if (digitwrapperRef.current) {
                digitwrapperRef.current.style.transform = `translateY(-${next * 200}px)`;
                digitwrapperRef.current.style.transition = "transform 0.5s";
            }
            return next;
        })
    }
    return (
        <div className="timer">
            <div className="timer-container">
                <div className="digit-wrapper" ref={digitwrapperRef}>
                    <div className="digit">0</div>
                    <div className="digit">1</div>
                    <div className="digit">2</div>
                    <div className="digit">3</div>
                    <div className="digit">4</div>
                    <div className="digit">5</div>
                </div>
            </div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Timer;