import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return <div className="App"></div>;
}

export default App;
