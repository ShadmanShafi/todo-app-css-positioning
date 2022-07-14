import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import Dashboard from "./components/Dashboard.js";
import CreateTodo from "./components/CreateTodo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
