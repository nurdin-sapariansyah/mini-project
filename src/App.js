import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Rounter, Switch, Route } from "react-router-dom";
import cekData from "./components/CekData";
import Registrasi from "./components/Registrasi";

function App() {
  return (
    <Rounter>
      <div>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/cekData" exact component={cekData} />
          <Route path="/registrasi" exact component={Registrasi} />
        </Switch>
      </div>
    </Rounter>
  );
}

export default App;
