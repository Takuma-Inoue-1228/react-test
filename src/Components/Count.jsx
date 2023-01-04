import { Link } from "react-router-dom";

const Count = () => {
  return (
    <>
      <h2>カウント画面</h2>
      <footer>
        <Link to={"/"}>トップ画面に戻る</Link>
      </footer>
    </>
  );
};

export default Count;