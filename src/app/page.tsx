import BlueHeader from "./components/blue-header";
import Carausel from "./components/caraousel";
import Editors from "./components/editorspick";
import Footer from "./components/footer";
import GreenDiv from "./components/green-div";
import Navbar from "./components/navbar";
import ProductCard from "./components/products-card";
import Whitediv from "./components/white-dic";
import FeaturedPosts from "./components/FeaturedPosts";
// import GreenHeader from "./components/green-header";
// import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Home(){
  return(
    <div>
      <BlueHeader/>
      <Navbar/>
      <Carausel/>
      <Editors/>
      <ProductCard/>
      <GreenDiv/>
      <Whitediv/>
      <FeaturedPosts/>
      {/* <GreenHeader/> */}
      <Footer/>
      
           
    </div>
  )
}