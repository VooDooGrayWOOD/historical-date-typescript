import styles from "./header.module.scss";

const Header: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.boxGradient}></div>
            <div className={styles.text}>
                <p>Исторические даты</p>
            </div>
        </div>
    );
};

export default Header;
