import styles from "./timePagination.module.scss";
import { useState } from "react";

const TimePagination: React.FC = () => {
    const [activeDate, setActiveDate] = useState<number>(0);
    const minusDate = () => {
        setActiveDate(activeDate + 1);
    };
    const plusDate = () => {
        setActiveDate(activeDate - 1);
    };
    return (
        <div className={styles.container}>
            <div className={styles.counter}>0{activeDate}/06</div>
            <div className={styles.buttonsBlock}>
                <button
                    onClick={() => plusDate()}
                    className={styles.btnBack}
                    disabled={activeDate === 0 ? true : false}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="14"
                        viewBox="0 0 10 14"
                        fill="none"
                    >
                        <path
                            d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
                            stroke="#42567A"
                            strokeWidth="2"
                        />
                    </svg>
                </button>
                <button
                    onClick={() => minusDate()}
                    className={styles.btnForward}
                    disabled={activeDate === 6 ? true : false}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="14"
                        viewBox="0 0 10 14"
                        fill="none"
                    >
                        <path
                            d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
                            stroke="#42567A"
                            strokeWidth="2"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default TimePagination;
