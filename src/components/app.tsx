import { useState, useEffect } from "react";
import Header from "./header";

const App = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(counter + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    });

    return (
        <div className="container">
            < Header message="Naming Constents"/>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>{ counter }</button>
        </div>
    );
};

export default App;