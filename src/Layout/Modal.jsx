import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { useEffect, useRef } from "react";

const Backdrop = (props) => {
    return (
        <div 
            className={styles.backdrop} 
            onClick={props.onHideCart}
        />
    )
}

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('modal');

const Modal = (props) => {
    return (
        <>
        {ReactDOM.createPortal(<Backdrop  
            onHideCart={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    )
};

// export default function Modal({ children, open }) {
//     useRef()

//     useEffect(() => {
//         if (open) {
//             dialog.current.showModal();
//         }
//     }, [open]);

//     return createPortal(
//         <dialog ref={dialog} className={styles.modal}>{children}</dialog>, 
//         document.getElementById('modal')
//     )
// }

export default Modal;