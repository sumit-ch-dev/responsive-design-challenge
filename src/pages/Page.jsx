import scarecrow from "../assets/Scarecrow.png";
import "../styles/style.css";

export default function Page() {
  return (
    <div>
      <div>
        <div className="scareCrow">
          <img src={scarecrow} alt="" />
        </div>
        <div>
          <p className="badNews">I have bad news for you</p>
        </div>
        <div>
          <p className="detail">
            {" "}
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
        </div>
        <button className="button">
          <p className="button-text">back to homepage</p>
        </button>
      </div>
    </div>
  );
}
