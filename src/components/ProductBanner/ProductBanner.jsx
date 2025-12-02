import "./ProductBanner.css";
import {
  PlayStationImg,
  VisionProImg,
  MacBookImg,
  AirPodsMaxImg,
  MobileAirPodsMaxImg,
  MobileMacBookImg,
  MobilePlayStationImg,
  MobileVisionProImg,
} from "@/assets/image";

export default function ProductBanner() {
  return (
    <section className="banner-wrapper">
      <div className="left-col">
        <article className="pro-item playstation">
          <img
            className="pro-item-img desk"
            src={PlayStationImg}
            alt="PlayStation 5 이미지"
          />
          <img
            className="pro-item-img mobile"
            src={MobilePlayStationImg}
            alt="PlayStation 5 mobile 이미지"
          />
          <div className="pro-item-text">
            <h1>
              Playstation <span>5</span>
            </h1>
            <p>
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </article>
        <div className="bottom-stack">
          <article className="pro-item airpods">
            <img
              className="pro-item-img desk"
              src={AirPodsMaxImg}
              alt="Apple AirPods Max 이미지"
            />
            <img
              className="pro-item-img mobile"
              src={MobileAirPodsMaxImg}
              alt="Apple AirPods Max 모바일 이미지"
            />
            <div className="pro-item-text">
              <h1>
                Apple AirPods <span>Max</span>
              </h1>
              <p>Computational audio. Listen, it's powerful</p>
            </div>
          </article>
          <article className="pro-item vision">
            <img
              className="pro-item-img desk"
              src={VisionProImg}
              alt="Apple Vision Pro 이미지"
            />
            <img
              className="pro-item-img mobile"
              src={MobileVisionProImg}
              alt="Apple Vision Pro 모바일 이미지"
            />
            <div className="pro-item-text">
              <h1>
                Apple Vision <span>Pro</span>
              </h1>
              <p>An immersive way to experience entertainment</p>
            </div>
          </article>
        </div>
      </div>

      <div className="right-col">
        <article className="pro-item macbook">
          <img
            className="pro-item-img desk"
            src={MacBookImg}
            alt="Macbook Air 이미지"
          />
          <img
            className="pro-item-img mobile"
            src={MobileMacBookImg}
            alt="Macbook Air 모바일 이미지"
          />
          <div className="pro-item-text">
            <h1>
              <span>Macbook</span> Air
            </h1>
            <p>
              The new 15-inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <button type="submit" className="macbook-btn">
              Shop Now
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
