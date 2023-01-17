import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import AddUser from "./components/AddUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Table />}></Route>
          <Route index element={<Table />}></Route>
          <Route path="/userList" element={<Table />}></Route>
          <Route path="/addUser" element={<AddUser />}></Route>
          <Route path="/updateUser/:userId" element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
