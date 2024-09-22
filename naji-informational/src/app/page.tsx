import Navbar from "./components/Navbar";
import Landingpage from "./components/Landing page";
import Ourservice from "./Ourservice";
import Products from "./components/Product";
import About from "./components/About";
import Features from "./Team";
import Footer from "./Footer";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Landingpage/>
    <Ourservice/>
    <Products/>
    <About/>
    <Features/>
    <Footer/>
   </div>
  );
}
