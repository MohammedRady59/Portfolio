import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import LandingPage from "../Components/LandingPage";
import NotFound from "../Components/UI/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<LandingPage />} />
        <Route path="work" element={<LandingPage />} />
        <Route path="contact" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);

export default router;
