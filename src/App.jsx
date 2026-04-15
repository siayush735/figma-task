import Hero from "./components/Hero";
import Shows from "./components/Shows";
import Team from "./components/Team";
import Maggie from "./components/Maggie";
import Artists from "./components/Artists";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <div className="bg-[#020617] text-white overflow-x-hidden">
      <Artists/>
       <Team />
       <Gallery/>
      <Shows />
      <Maggie />
      <Hero />
    </div>
  );
}