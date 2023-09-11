import "./App.css";
import Rightbar from "./Components/Rightbar/Rightbar";
import Graph from "./Components/Middlebar/Graph";
import store from "./Components/Rightbar/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Rightbar />
        <Graph />
      </div>
    </Provider>
  );
}

export default App;
