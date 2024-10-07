import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import { Suspense, lazy } from "react";
import { CounterProvider } from "./components/context/FavoritesContext";
// import HomePage from "./components/HomePage";
// import Contact from './components/Contact';

const HomePage = lazy(() => import("./components/HomePage"));
const Contact = lazy(() => import("./components/Contact"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ],
  {
    basename: "/Real-Estate-App",
  }
);

function App() {
  return (
    <>
      <CounterProvider>
      <Suspense fallback={<div>Loading</div>}>
        <RouterProvider router={router} />
      </Suspense>
      </CounterProvider>
    </>
  );
}

export default App;
