import styles from './Button.module.css';

export default function Button ({ children, textOnly, className, ...props }) {
    //const cssClasses = 'button-alt' ? `text-button ${className}` : `button ${className}`;
    return (
        <button className={styles.button} {...props}>{children}</button>
    )
}