<<<<<<< HEAD
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landing page";
import Footer from "./components/Footer/footer";
import Ourservice from "./components/services/Ourservice";
import Features from "./components/Teams/Team";
=======
import Image from "next/image";
import Navbar from "./Navbar";
import Landingpage from "./Landing page";
import Ourservice from "./components/Ourservice";
import Product from "./Product";
import About from "./About"
import Features from "./components/Team";
import Footer from "./footer";
>>>>>>> 96806e8dd458001a04fec433e6928e8d35f2805d

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
