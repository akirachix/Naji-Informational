
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landing page";
import Footer from "./components/Footer/footer";
import Ourservice from "./components/services/Ourservice";
import Features from "./components/Teams/Team"
import Products from "./components/Product";
import About from "./components/About";


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
