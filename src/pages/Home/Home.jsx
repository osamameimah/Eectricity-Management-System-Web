import About from "../../components/Aboute/Aboute";
import Contact from "../../components/Contact/Contact";
import Faq from "../../components/Faq/Faq";
import Hero from "../../components/Hero/Hero";
import Payment from "../../components/Payment/Payment";
import Services from "../../components/Services/Services";
import Status from "../../components/Status/status";

const Home = () => {
    return (
        <>
            <Hero />
            <Status />
            <About />
            <Services />
            <Payment />
            <Faq />
            <Contact />
        </>
    )


}

export default Home;