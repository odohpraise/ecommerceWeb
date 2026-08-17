import { featuredPosts } from "../data/homeContent";
import "./FeaturedPosts.css";

export default function FeaturedPosts() {
    return (
        <section className="container featured-posts">
            <div className="page-heading">
                <span className="eyebrow">Practice Advice</span>
                <h1>Featured Posts</h1>
            </div>

            <div className="posts-grid">
                {featuredPosts.map((post) => (
                    <article key={post.id} className="post-card">
                        <div className={`post-card-media post-card-media--${post.tone}`}>
                            <span className="post-card-badge">New</span>
                        </div>
                        <div className="post-card-body">
                            <p className="post-card-tags">Google, Trending, New</p>
                            <h3 className="post-card-title">{post.title}</h3>
                            <p className="post-card-excerpt">{post.excerpt}</p>
                            <div className="post-card-meta">
                                <span>{post.date}</span>
                                <span>{post.comments} comments</span>
                            </div>
                            <a href="#" className="post-card-link">Learn More &gt;</a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}