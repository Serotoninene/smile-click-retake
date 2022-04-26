// Components
import Navbar from "./Components/Navbar";
import Herobanner from "./Frames/Herobanner";
import ClickandSmile from "./Frames/ClickandSmile";
import Products from "./Frames/Products";
import PartnersBanner from "./Frames/PartnersBanner";
import Advantages from "./Frames/Advantages";
import Questions from "./Frames/Questions";
import Reviews from "./Frames/Reviews";
import Aide from "./Frames/Aide";
import Footer from "./Components/Footer";
// Styling
import "./Scss/style.scss";

function App() {
  return (
    <div className="App relative">
      <Herobanner />
      <ClickandSmile />
      <Products />
      <PartnersBanner />
      <Advantages />
      <Questions />
      {/* <Reviews /> */}
      <Aide />
      <Footer />
      <Navbar />
    </div>
  );
}

export default App;
