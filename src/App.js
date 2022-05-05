import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
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
  const {darkMode} = useContext(DarkModeContext);

  const currentUser = false;

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>;
  };

  return (
    <div className={darkMode ? "app dark": "dark"}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login/>}/>
          <Route index element={<RequireAuth><Home/></RequireAuth>}/>
          <Route path="users">
            <Route index element={<RequireAuth><List/></RequireAuth>}/>
            <Route path=":userID" element={<RequireAuth><Single/></RequireAuth>}/>
            <Route path="new" element={<RequireAuth><New inputs={userInputs} title ="Add new user"/></RequireAuth>}/>
          </Route>
          <Route path="products">
            <Route index element={<RequireAuth><List/></RequireAuth>}/>
            <Route path=":productID" element={<RequireAuth><Single/></RequireAuth>}/>
            <Route path="new" element={<RequireAuth><New inputs={productInputs} title="Add new product"/></RequireAuth>}/>
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
