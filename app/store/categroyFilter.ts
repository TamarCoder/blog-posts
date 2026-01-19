import { create } from "zustand";
import { posts } from "../Components/MainContent/PostsContent/PostDate";

interface Post {
  id: number;
  categories: string;
}

interface FilterStore {
  posts: Post[];
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  filterPosts: () => Post[];
}

const initialPosts = posts;

const initialCategories = [
  "All",
   "Technology",
   "Travel",
   "Food",
   "Lifestyle",
   "Business",
   "Art"
];

 export const filterStore = create<FilterStore>((set, get) => ({
  posts: initialPosts,
  categories: initialCategories,
  activeCategory: "All",

  setActiveCategory: (category: string) => set({ activeCategory: category }),

  filterPosts: () => {
    const { posts, activeCategory } = get();

    if (activeCategory === "All") {
      return posts;
    }
    return posts.filter((post) => post.categories === activeCategory);
  },
}));
