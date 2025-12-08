// import About from "./About";
 import About from "../../components/Aboute/Aboute";
import Contact from "../../components/Contact/Contact";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Payment from "../../components/Payment/Payment";
import Services from "../../components/Services/Services";
import Status from "../../components/Status/status"; 

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Status />
            <About />
            <Services />
            <Payment />
            <Faq />
            <Contact />
            <Footer />



        </>
    )


}

export default Home;