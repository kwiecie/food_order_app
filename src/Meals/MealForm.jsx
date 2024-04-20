export default function MealForm () {
    return (
        <form>
            <label htmlFor="Amount"></label>
            <input id="amount_" type="number" min={1} max={5} defaultValue={1}></input>
            <button type="submit">Add</button>
        </form>
    )
}