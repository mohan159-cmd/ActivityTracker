import ActivityOverview from "./components/categories/activity-overview/ActivityOverview";
import CategoryDashboard from "./components/categories/CategoryDashboard";
import HomePage from "./components/home/components/HomePage";

export const routeConfig = [
    {
        path: "/home-page",
        component: <HomePage />
    },
    {
        path: "/categories/:categoryName",
        component: <CategoryDashboard />
    },
    {
        path: "/categories/:categoryName/:activityName",
        component: <ActivityOverview />
    },
]