import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CategoryPage from "../pages/CategoryPage";
import FeedLayout from "../layout/FeedLayout";
import BestFeedPage from "../pages/BestFeedPage";
import NewFeedPage from "../pages/NewFeedPage";

const router = createBrowserRouter([
  {
    path: "/category",
    element: <CategoryPage />,
  },
  {
    path: "/feed/",
    element: <FeedLayout />,
    children: [
      {
        path: "best/:categoryId",
        element: <BestFeedPage />,
      },

      {
        path: "new/:categoryId",
        element: <NewFeedPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
