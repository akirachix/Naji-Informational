import Image from "next/image";
import Navbar from "./Navbar";
import Landingpage from "./Landing page";
import Footer from "./footer";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Landingpage/>
    <Footer/>
   </div>
  );
}
