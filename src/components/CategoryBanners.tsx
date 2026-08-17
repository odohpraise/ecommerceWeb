import { categoryBanners, type CategoryBanner } from "../data/homeContent";
import tablewareImg from "../assets/tablewareImg.png";
import plantersImg from "../assets/plantersImg.png";
import lightingImg from "../assets/lightingImg.png";
import ceramicsImg from "../assets/ceramicsImg.png";
import "./CategoryBanners.css";

const IMAGES: Record<CategoryBanner["id"], string> = {
    tableware: tablewareImg,
    planters: plantersImg,
    lighting: lightingImg,
    ceramics: ceramicsImg,
};

export default function CategoryBanners() {
    return (
        <section className="container category-banners">
            {categoryBanners.map((banner, index) => (
                <a
                    key={banner.id}
                    href="#"
                    className={`category-card category-card--slot-${index}`}
                >
                    <img
                        src={IMAGES[banner.id]}
                        alt={`${banner.title} category`}
                        className="category-card-img"
                        loading="lazy"
                    />
                    <div className="category-card-content">
                        <span className="category-card-items">{banner.itemCount}</span>
                        <h3 className="category-card-title">{banner.title}</h3>
                        <span className="category-card-link">Read More</span>
                    </div>
                </a>
            ))
            }
        </section >
    );
}