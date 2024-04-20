import CartIcon from "../Cart/CartIcon";

export default function HeaderCartIcon (props) {
    return (
        <button onClick={props.onClick}>

                <CartIcon />
        </button>
    )
}