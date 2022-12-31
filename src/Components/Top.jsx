import { Link } from "react-router-dom";

const Top = () => {
  return (
    <>
      <h2>トップ画面</h2>
      <div>
        <p>各機能へのリンク</p>
        <ul>
          <li>
            Todo画面は<Link to={`/todo/`}>こちら</Link>
          </li>
          <li>
            カウント画面は<Link to={`/count/`}>こちら</Link>
          </li>
          <li>
            ランダム画像表示画面は<Link to={`/random_image/`}>こちら</Link>
          </li>
          <li>
            User画面は<Link to={`/user/`}>こちら</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Top;
