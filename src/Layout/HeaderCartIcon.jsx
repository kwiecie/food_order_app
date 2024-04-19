import CartIcon from "../Cart/CartIcon";

export default function HeaderCartIcon () {
    return (
        <button>
            <span>
                <CartIcon />
            </span>
            <span>Your cart</span>
        </button>
    )
}