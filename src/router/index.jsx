import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Components/pages/Home";
import About from "../Components/pages/About";
import Work from "../Components/pages/Work";
import Contact from "../Components/pages/Contact";
import NotFound from "../Components/UI/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="work" element={<Work />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </>
  )
);
export default router;
