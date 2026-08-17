export interface CategoryBanner {
    id: string;
    title: string;
    itemCount: string;
    tone: "blush" | "sage" | "gray" | "sky";
    size: "large" | "small";
}

export const categoryBanners: CategoryBanner[] = [
    { id: "tableware", title: "Furniture", itemCount: "5 Items", tone: "blush", size: "large" },
    { id: "planters", title: "Furniture", itemCount: "5 Items", tone: "sage", size: "large" },
    { id: "lighting", title: "Furniture", itemCount: "5 Items", tone: "gray", size: "small" },
    { id: "ceramics", title: "Furniture", itemCount: "5 Items", tone: "sky", size: "small" },
];

export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    icon: "bookmark" | "list" | "trend";
}

export const services: ServiceItem[] = [
    { id: "easy-wins", title: "Easy Wins", description: "Get your best looking smile now!", icon: "bookmark" },
    { id: "concrete", title: "Concrete", description: "Defalcate is most focused in helping you discover your most beautiful smile", icon: "list" },
    { id: "hack-growth", title: "Hack Growth", description: "Overcame any hurdle or any other problem.", icon: "trend" },
];

export interface FeaturedPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    comments: number;
    tone: "navy" | "cream" | "sage";
}

export const featuredPosts: FeaturedPost[] = [
    { id: "post-1", title: "Loudest à la Madison #1 (L'Integral)", excerpt: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.", date: "22 April 2021", comments: 10, tone: "navy" },
    { id: "post-2", title: "Loudest à la Madison #1 (L'Integral)", excerpt: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.", date: "22 April 2021", comments: 10, tone: "cream" },
    { id: "post-3", title: "Loudest à la Madison #1 (L'Integral)", excerpt: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.", date: "22 April 2021", comments: 10, tone: "sage" },
];

export const testimonial = {
    quote: "Late helps you see how many more days you need to work to reach your financial goal.",
    name: "Regina Miles",
    role: "Designer",
    rating: 4,
};

export const galleryTiles = 9;