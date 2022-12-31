import { Link } from "react-router-dom";

const User = () => {
  return (
    <>
      <h2>ユーザ画面</h2>
      <div>
        <Link to={`/`}>トップ画面に戻る</Link>
      </div>
    </>
  );
};

export default User;