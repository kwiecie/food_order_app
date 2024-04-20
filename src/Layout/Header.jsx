import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

export default function Header (props) {
    return (
        <header className={styles.header}>
            <h1 className={styles.header}>Food App</h1>
            <HeaderCartButton 
                className={styles.header}
                onClick={props.onOpenCart}
            />
        </header>
    )
}