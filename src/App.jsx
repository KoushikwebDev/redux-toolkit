import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, reset } from "./redux/slice/count.slice";
import { fetchProduct } from "./redux/slice/fetch.slice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.countSlice.count);
  const { product, status } = useSelector((store) => store.fetchProduct);
  console.log(product, status);
  return (
    <>
      <h1>Hello Vite {count}</h1>
      <h1>Fetching Status {status}</h1>

      <button onClick={() => dispatch(increment(1))}>Increase</button>
      <button onClick={() => dispatch(decrement(1))}>Decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(fetchProduct())}>Fetch Profuct</button>
    </>
  );
}

export default App;
