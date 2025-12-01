import "./MainTop.css";
import mainTopImg from "@assets/image/MainTop.png";

export default function MainTop() {
  return (
    <>
      <section className="main-top-section">
        <div className="main-top-inner">
          <div className="main-top-left">
            <p className="main-top-label">Pro.Beyond.</p>
            <h1 className="main-top-title">
              IPhone 14 <span>Pro</span>
            </h1>
            <p className="main-top-description">
              Created to change everything for the better. For everyone
            </p>
            <button className="main-top-btn">Shop Now</button>
          </div>
          <div className="main-top-right">
            <img
              src={mainTopImg}
              alt="iphone 14 Pro 대형 배너"
              className="main-top-img"
            />
          </div>
        </div>
      </section>
    </>
  );
}
