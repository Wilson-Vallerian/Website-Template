import "./styles/app.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./routes/RootLayout";
import Error from "./routes/Error";
import Main from "./pages/Main";
import Services from "./pages/Services";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
