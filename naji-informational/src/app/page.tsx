import Navbar from "./components/Navbar";
import Landingpage from "./components/Landing page";
import Footer from "./components/Footer/footer";
import Ourservice from "./components/services/Ourservice";
import Features from "./components/Teams/Team";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Landingpage/>
    <Ourservice/>
    <Features/>
    <Footer/>
   </div>
  );
}
