import { useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryBanners from "../components/CategoryBanners";
import ServicesSection from "../components/ServiceSection";
import FeaturedPosts from "../components/FeaturedPosts";
import Testimonials from "../components/Testimonials";
import CtaBanner from "../components/CtaBanner";
import { useGetProductsQuery } from "../features/products/productsApi";
import "../components/ProductGrid.css";

const PAGE_SIZE = 10;

export default function HomePage() {
    const [skip, setSkip] = useState(0);
    const { data, isLoading, isFetching, isError } = useGetProductsQuery({
        limit: PAGE_SIZE,
        skip,
    });

    const canLoadMore = data ? data.products.length < data.total : false;

    return (
        <>
            <CategoryBanners />

            <div className="container">
                <div className="page-heading">
                    <span className="eyebrow">Featured Products</span>
                    <h1>Bestseller Products</h1>
                </div>

                {isLoading && <p className="product-grid-state">Loading products…</p>}
                {isError && (
                    <p className="product-grid-state">
                        Something went wrong loading products. Please try again.
                    </p>
                )}

                {data && (
                    <>
                        <div className="product-grid">
                            {data.products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {canLoadMore && (
                            <div className="product-grid-load-more">
                                <button
                                    className="btn btn-outline"
                                    onClick={() => setSkip((s) => s + PAGE_SIZE)}
                                    disabled={isFetching}
                                >
                                    {isFetching ? "Loading…" : "Load More Products"}
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>

            <ServicesSection />
            <FeaturedPosts />
            <Testimonials />
            <CtaBanner />
        </>
    );
}