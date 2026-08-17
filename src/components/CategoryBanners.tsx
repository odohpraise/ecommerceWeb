import { categoryBanners } from "../data/homeContent";
import "./CategoryBanners.css";

export default function CategoryBanners() {
    return (
        <section className="container category-banners">
            {categoryBanners.map((banner, index) => (
                <a
                    key={banner.id}
                    href="#"
                    className={`category-card category-card--${banner.tone} category-card--slot-${index}`}
                >
                    <span className="category-card-items">{banner.itemCount}</span>
                    <h3 className="category-card-title">{banner.title}</h3>
                    <span className="category-card-link">Read More</span>
                </a>
            ))}
        </section>
    );
}