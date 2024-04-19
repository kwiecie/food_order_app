import styles from './Header.module.css';
import HeaderCartIcon from './HeaderCartIcon';

export default function Header () {
    return (
        <header className={styles.header}>
            <h1 className={styles.headerTitle}>Food </h1>
            <HeaderCartIcon className={styles.headerButton}/>
        </header>
    )
}