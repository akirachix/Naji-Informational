import Navbar from "./Navbar";
import Landingpage from "./Landing page";
import Ourservice from "./Ourservice";
import Products from "./Product";
import About from "./About";
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
