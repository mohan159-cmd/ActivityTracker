import ActivityOverview from "./components/categories/activity-overview/ActivityOverview";
import CategoryDashboard from "./components/categories/CategoryDashboard";

export const routeConfig = [
    {
        path: "/categories/:categoryName",
        component: <CategoryDashboard />
    },
    {
        path: "/categories/:categoryName/:activityName",
        component: <ActivityOverview />
    },
]