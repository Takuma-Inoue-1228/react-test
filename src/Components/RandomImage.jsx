import { Link } from "react-router-dom";

const RandomImage = () => {
  return (
    <>
      <h2>ランダム画像表示画面</h2>
      <div>
        <Link to={`/`}>トップ画面に戻る</Link>
      </div>
    </>
  );
};

export default RandomImage;