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
        toast.success(`Data successfully retrieved`);
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err}`);
      });
  };
  return (
    <div className="App">
      <button onClick={notify}>Notify!</button>
    </div>
  );
}

export default App;
