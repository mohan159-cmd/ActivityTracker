import CatlogDashboard from "./components/categories/components/CatlogDashboard";
import HomePage from "./components/home/components/HomePage";

export const routeConfig = [
    {
        path: "/home-page",
        component: <HomePage />
    },
    {
        path: "/category-catlogs",
        component: <CatlogDashboard />
    },
]