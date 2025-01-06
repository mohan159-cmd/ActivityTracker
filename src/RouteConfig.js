import ActivityOverview from "./components/categories/activity-overview/ActivityOverview";
import CategoryDashboard from "./components/categories/CategoryDashboard";
import Home from "./components/home/Home";

export const routeConfig = [
    {
        path: "/home-page",
        component: <Home />
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