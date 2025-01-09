import Nav from "./components/Nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopOffers from "./components/TopOffers";
import MedalWorthy from "./components/MedalWorthy";
import GlobalBrands from "./components/GlobalBrands";

function App() {
  return (
    <div>
      <Nav />

      <TopOffers />
      <MedalWorthy />
      <GlobalBrands />
    </div>
  );
}

export default App;
