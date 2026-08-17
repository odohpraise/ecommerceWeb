import { useState } from "react";
import "./Footer.css";

const FOOTER_COLUMNS = [
    { heading: "Company Info", links: ["About Us", "Carrier", "We are hiring", "Blog"] },
    { heading: "Legal", links: ["About Us", "Carrier", "We are hiring", "Blog"] },
    { heading: "Features", links: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"] },
    { heading: "Resources", links: ["IOS & Android", "Watch a Demo", "Customers", "API"] },
];

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Newsletter signup isn't wired to a backend for this assessment.
        setEmail("");
    };

    return (
        <footer className="site-footer">
            <div className="container footer-top">
                <div className="footer-brand-row">
                    <span className="brand">Bandage</span>
                    <div className="footer-social">
                        <a href="#" aria-label="Facebook">f</a>
                        <a href="#" aria-label="Instagram">in</a>
                        <a href="#" aria-label="Twitter">tw</a>
                    </div>
                </div>

                <div className="footer-columns">
                    {FOOTER_COLUMNS.map((col) => (
                        <div key={col.heading} className="footer-column">
                            <h4>{col.heading}</h4>
                            <ul>
                                {col.links.map((link) => (
                                    <li key={link}><a href="#">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="footer-column footer-column-subscribe">
                        <h4>Get In Touch</h4>
                        <form onSubmit={handleSubscribe} className="footer-subscribe-form">
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                aria-label="Email address"
                            />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                        <p className="footer-fineprint">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Made with love. All rights reserved.</p>
            </div>
        </footer>
    );
}