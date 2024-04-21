export default function CartItem (props) {
    //const price = `$${props.price?.toFixed(2)}`;

    return (
        <li>
            <h3>{props.name}</h3>
            <div>
                <p>{props.amount}</p>
                <p>{props.price}</p>
            </div>
        </li>
    );
};