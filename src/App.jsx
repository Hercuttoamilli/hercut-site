import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FatMetabolism from './pages/FatMetabolism';
import AppetiteSupport from './pages/AppetiteSupport';
import MetabolicHealth from './pages/MetabolicHealth';
import Estimator from "./pages/Estimator"; // ✅ now it's a full page
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import ReviewForm from "./pages/ReviewForm";
import Ingredients from "./pages/Ingredients";
import HormonesNotHabits from "./blog/HormonesNotHabits";
import CleanEatingBloat from "./blog/CleanEatingBloat";
import FatLossAfter25 from "./blog/FatLossAfter25";
import MetabolicChemistry from "./blog/MetabolicChemistry";
import RealWeightLoss from "./blog/RealWeightLoss";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fat-metabolism" element={<FatMetabolism />} />
      <Route path="/appetite-support" element={<AppetiteSupport />} />
      <Route path="/metabolic-health" element={<MetabolicHealth />} />
      <Route path="/estimator" element={<Estimator />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
      <Route path="/write-review" element={<ReviewForm />} />
      <Route path="/ingredients" element={<Ingredients />} />
      <Route path="/blog/hormones-not-habits" element={<HormonesNotHabits />} />
      <Route path="/blog/clean-eating-bloat" element={<CleanEatingBloat />} />
      <Route path="/blog/fat-loss-after-25" element={<FatLossAfter25 />} />
      <Route path="/blog/metabolic-chemistry" element={<MetabolicChemistry />} />
      <Route path="/blog/real-weight-loss" element={<RealWeightLoss />} />

    </Routes>

  );
}

export default App;
