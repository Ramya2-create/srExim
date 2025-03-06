import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Ourbusiness } from "./Ourbusiness";
import { Product } from "./Products";
import { Certification } from "./Certifications";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { Contact } from "./Contact";
import { BitterGourd } from "./ProductComponents/Bittergourd/Bittergourd";
import { Coconut } from "./ProductComponents/Coconut/Coconut";
import { Drumstic } from "./ProductComponents/Drumstics/Drumstic";
import { Egg } from "./ProductComponents/Eggs/Egg";
import { Greenchilli } from "./ProductComponents/Greenchilli/Greenchilli";
import { Garlic } from "./ProductComponents/Garlic/Garlic";

function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<Ourbusiness />} />
        <Route path="/products" element={<Product />} />

         <Route path="/products/bittergourd" element={<BitterGourd />}/>
         <Route path="/products/coconut" element={<Coconut/>}/>
         <Route path="/products/drumstics" element={<Drumstic/>}/>
         <Route path="/products/eggs" element={<Egg/>}/>
         <Route path="/products/greenchilli" element={<Greenchilli/>}/>
         <Route path="/products/garlic" element={<Garlic/>}/>
        <Route path="/certifications" element={<Certification />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
