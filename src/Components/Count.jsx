import { Link } from "react-router-dom";

const Count = () => {
  return (
    <>
      <h2>カウント画面</h2>
      <div>
        <Link to={`/`}>トップ画面に戻る</Link>
      </div>
    </>
  );
};

export default Count;