import type { ReactElement } from "react";
import { services, type ServiceItem } from "../data/homeContent";
import "./ServiceSection.css";

const icons: Record<ServiceItem["icon"], ReactElement> = {
    bookmark: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M6 3h12v18l-6-4-6 4V3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
    ),
    list: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M7 9h10M7 13h10M7 17h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    ),
    trend: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M3 17l6-6 4 4 8-8M21 7v6M21 7h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
};

export default function ServicesSection() {
    return (
        <section className="container services-section">
            <div className="page-heading">
                <span className="eyebrow">Featured Products</span>
                <h1>The Best Services</h1>
                <p className="services-subtitle">Problems trying to resolve the conflict between</p>
            </div>

            <div className="services-grid">
                {services.map((service) => (
                    <div key={service.id} className="service-card">
                        <span className="service-icon">{icons[service.icon]}</span>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}