import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Intro from "../../components/Intro/Intro";
import "./Home.css";

function Home() {
    return (
        <div className="home-page">
            <Header showBackButton={false} />
            <Hero />
            <Features />
            <Intro />
            <Footer showAuthButtons={true} showContactLink={true} />
        </div>
    );
}

export default Home;