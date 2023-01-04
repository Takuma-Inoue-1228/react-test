import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./Components/Top";
import Todo from "./Components/Todo";
import Count from "./Components/Count";
import RandomImage from "./Components/RandomImage";
import User from "./Components/User.jsx";
import UserDetail from "./Components/UserDetail.jsx";
import NotFound from "./Components/404";

function App() {
  return (
    // react-router-domを使用するときの呪文
    <BrowserRouter>
      {/* // Routeを複数書くときの呪文？ */}
      <Routes>
        {/* path: URLに入力されるパスを記載 */}
        {/* element: 呼び出すコンポーネントを指定 */}
        <Route path={"/"} element={<Top />} />
        <Route path={"/todo/"} element={<Todo />} />
        <Route path={"/count/"} element={<Count />} />
        <Route path={"/random_image/"} element={<RandomImage />} />
        <Route path={"/user/"} element={<User />} />
        <Route path={"/user/"} element={<UserDetail />} />
        {/* URLの/user/以降に値が入ってい場合、UserDetailコンポーネントを表示する */}
        <Route path={"/user/:id"} element={<UserDetail />} />
        {/* 「*」はそれ以外を示す */}
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
