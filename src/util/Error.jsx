export default function Error({title, message, className}) {
    return <div className={className}>
        <h2>{title}</h2>
        <p>{message}</p>
    </div>
}