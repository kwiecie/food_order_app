import styles from './Button.module.css';

export default function Button ({ children, textOnly, ...props }) {
    //const cssClasses = 'button-alt' ? `${className}--alt` : `${className}`;
    return (
        <button {...props}>{children}</button>
    )
}