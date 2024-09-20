import Image from "next/image";
import Navbar from "./Navbar";
import Landingpage from "./Landing page";
import Footer from "./footer";
import Ourservice from "./components/Ourservice";
import Features from "./components/Team";

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
