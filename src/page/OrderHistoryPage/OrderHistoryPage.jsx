import { checkToken } from "../../utilities/users-service";

export default function OrderHistoryPage() {

    async function handleCheckToken() {
        alert('clicked');
    }
    return (
        <>
        <h1>Order Histyroy</h1>
        <button onClick={handleCheckToken}>Check When my log-in expires</button>
        </>
    )
}