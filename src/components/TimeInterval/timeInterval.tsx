import styles from "./TimeInterval.module.scss";
import { useState } from "react";
import { dates } from "../../data/data";

const TimeInterval: React.FC = () => {
    const [activeDate, setActiveDate] = useState(0);

    return (
        <div className={styles.container}>
            <div className={styles.timeFrom}>{dates[activeDate][0]}</div>
            <div className={styles.timeTo}>{dates[activeDate][1]}</div>
        </div>
    );
};

export default TimeInterval;
