import { categorySectionData } from "@data/CategorySection";
import { ArrowIcon } from "@/assets/icons";
import "./CategorySection.css";

export default function CategorySection() {
  return (
    <section className="category-section-container">
      <div className="category-section">
        <div className="category-title">
          <h1>Browse By Category</h1>
          <div className="category-title-arrow">
            <ArrowIcon />
            <ArrowIcon style={{ transform: "rotate(180deg)" }} />
          </div>
        </div>
        <div className="category-tabs">
          {categorySectionData.map(({ id, content, icon: Icon }) => (
            <button key={id} className="category-card" type="button">
              <Icon />
              <p>{content}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
