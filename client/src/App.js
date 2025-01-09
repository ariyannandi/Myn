import Nav from "./components/Nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopOffers from "./components/TopOffers";
import MedalWorthy from "./components/MedalWorthy";

function App() {
  return (
    <div>
      <Nav />

      <TopOffers />
      <MedalWorthy />
    </div>
  );
}

export default App;
