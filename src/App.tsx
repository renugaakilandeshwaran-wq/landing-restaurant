
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dinner from "./components/Dinner";
import Footer from "./components/Footer";
import MenuItems from "./components/MenuItems";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function Layout() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/" ||
    location.pathname === "/login";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <main className="max-w-6xl mx-auto pt-24">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/menuitems" element={<MenuItems />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservations" element={<Reservation />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </main>

      {!hideNavbar && <Footer />}
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;