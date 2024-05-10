import "./App.css";
import { registerLicense } from "@syncfusion/ej2-base";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dash from "./Dash";
import Home from "./Home";
registerLicense(
  "ORg4AjUWIQA/Gnt2UFhhQlJBfVldWHxLflFyVWFTel96dFZWESFaRnZdRl1mSXhTdEBiXHpdeHNT"
);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dash" element={<Dash />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
