import { testimonial, galleryTiles } from "../data/homeContent";
import "./Testimonials.css";

export default function Testimonials() {
    return (
        <section className="container testimonials">
            <div className="testimonial-block">
                <h2>What they say about us</h2>
                <div className="testimonial-avatar" aria-hidden="true" />
                <div className="testimonial-rating" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < testimonial.rating ? "star star--filled" : "star"}>★</span>
                    ))}
                </div>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-role">{testimonial.role}</p>
            </div>

            <div className="testimonial-gallery">
                {Array.from({ length: galleryTiles }).map((_, i) => (
                    <div key={i} className={`gallery-tile gallery-tile--${i % 6}`} />
                ))}
            </div>
        </section>
    );
}