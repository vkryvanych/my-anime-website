import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Intro from "../../components/Intro/Intro";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <Intro />
    </div>
  );
}

export default Home;
