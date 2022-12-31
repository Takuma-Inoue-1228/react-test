import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./Components/Top";
import Todo from "./Components/Todo";
import Count from "./Components/Count";
import RandomImage from "./Components/RandomImage";
import User from "./Components/User.jsx";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Top />} />
        <Route path={`/todo/`} element={<Todo />} />
        <Route path={`/count/`} element={<Count />} />
        <Route path={`/random_image/`} element={<RandomImage />} />
        <Route path={`/user/`} element={<User />} />
        <Route path={`*`} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
