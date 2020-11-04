import "./App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

toast.configure();
function App() {
  const notify = () => {
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        console.log("res-------------10--------------->", res);
        toast.success("Basic Notification!!!!");
      })
      .catch((err) => console.log("Nikal l***e............."));
    toast.error(`Basic Notification!!!!`);
  };
  return (
    <div className="App">
      <button onClick={notify}>Notify!</button>
    </div>
  );
}

export default App;
