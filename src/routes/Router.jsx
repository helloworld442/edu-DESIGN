import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CategoryPage from "../pages/CategoryPage";
import BestPostPage from "../pages/BestPostPage";
import NewPostPage from "../pages/NewPostPage";
import PostLayout from "../layout/PostLayout";
import WritePage from "../pages/WritePage";

const router = createBrowserRouter([
  {
    path: "/category",
    element: <CategoryPage />,
  },
  {
    path: "/feed/",
    element: <PostLayout />,
    children: [
      {
        path: "best/:categoryId",
        element: <BestPostPage />,
      },

      {
        path: "new/:categoryId",
        element: <NewPostPage />,
      },
    ],
  },
  {
    path: "/write",
    element: <WritePage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
