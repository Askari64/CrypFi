import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import FeaturedPage from "./pages/FeaturedPage";
/*import EarnPage from "./pages/EarnPage"; */
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<FeaturedPage />} />
        {/*<Route path="/earn" element={<EarnPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
