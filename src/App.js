import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/main";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Second from "./pages/second";
import Third from "./pages/third";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/second" element={<Second />} />
          {/* <Route path="/third" element={<Third />}/> */}
        </Routes>
      </BrowserRouter>
    </>

    // <>
    // <Main />
    // </>
  );
}

export default App;
