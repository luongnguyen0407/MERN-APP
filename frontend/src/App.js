import { Route, Routes } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import SignPage from "./page/SignPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/sign" element={<SignPage></SignPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
