import { useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount } from "../features/counter/counterSlice"

export default function Counter(){
    const dispatch = useDispatch()
    function handleIncrement() {
        dispatch(increment())
    }
    function handleDecrement() {
        dispatch(decrement())
    }
    function handleIncrementByAmount(){
        dispatch(incrementByAmount(10))
    }
    return (
        <div>
            <button className="bg-red-200" onClick={() => handleIncrement()}>incrementa</button><br /><br />
            <button className="bg-red-200" onClick={() => handleDecrement()}>Decrementa</button><br /><br />
            <button className="bg-red-200" onClick={() => handleIncrementByAmount()}>+10</button>
        </div>
    )
}