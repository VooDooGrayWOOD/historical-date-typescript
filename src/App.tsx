import React, { useRef } from "react";
import Header from "./components/Header/header";
import TimeInterval from "./components/TimeInterval/timeInterval";
import styles from "./app.module.scss"
import TimePagination from "./TimePagination/timePagination";

const App: React.FC = () => {

    return (
        <div className="App">
            <div className={styles.app}>
                <div className={styles.container}>
                    <div className={styles.verticalLine}></div>
                    <div className={styles.horizonlLine}></div>
                    <Header />
                    <TimeInterval />
                    <TimePagination />
                </div>
            </div>
        </div>
    );
}

export default App;
