import "./MainBanner.css";
import { MainBannerImg } from "@assets/image";

export default function MainBanner() {
  return (
    <>
      <section className="main-banner-section">
        <div className="main-banner-inner">
          <div className="main-banner-left">
            <p className="main-banner-label">Pro.Beyond.</p>
            <h1 className="main-banner-title">
              IPhone 14 <span>Pro</span>
            </h1>
            <p className="main-banner-description">
              Created to change everything for the better. For everyone
            </p>
            <button className="main-banner-btn">Shop Now</button>
          </div>
          <div className="main-banner-right">
            <img
              src={MainBannerImg}
              alt="iphone 14 Pro 대형 배너"
              className="main-banner-img"
            />
          </div>
        </div>
      </section>
    </>
  );
}
