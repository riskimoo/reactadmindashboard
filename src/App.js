import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {userInputs, productInputs} from "./formSource"
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Maintenance from "./pages/maintenance/Maintenance";

function App() {

  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark": "dark"}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userID" element={<Single/>}/>
            <Route path="new" element={<New inputs={userInputs} title ="Add new user"/>}/>
          </Route>
          <Route path="products">
            <Route index element={<List/>}/>
            <Route path=":productID" element={<Single/>}/>
            <Route path="new" element={<New inputs={productInputs} title="Add new product"/>}/>
          </Route>
          <Route path="maintenance">
            <Route index element={<Maintenance/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>,
    </div>
  );
}

export default App;
