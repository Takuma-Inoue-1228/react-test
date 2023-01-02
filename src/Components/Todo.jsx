import { Link } from "react-router-dom";

const Todo = () => {
  return (
    <>
      <h2>ToDo画面</h2>
      <footer>
        <Link to={"/"}>トップ画面に戻る</Link>
      </footer>
    </>
  );
};

export default Todo;