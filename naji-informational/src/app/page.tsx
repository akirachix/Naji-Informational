import Image from "next/image";
import Navbar from "./Navbar";
import Landingpage from "./Landing page";
import Ourservice from "./components/Ourservice";
import Product from "./Product";
import About from "./About"
import Features from "./components/Team";
import Footer from "./Footer";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Landingpage/>
    <Ourservice/>
    <Product/>
    <About/>
    <Features/>
    <Footer/>
   </div>
  );
}
