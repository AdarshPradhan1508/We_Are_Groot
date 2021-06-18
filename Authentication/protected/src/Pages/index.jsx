import React,{useState} from 'react';
import Footer from '../Components/Footer/footer';
import HeroSection from '../Components/HeroSection/hero';
import { homeObjOne,homeObjTwo,homeObjThree } from '../Components/InfoSection/Data';
import InfoSection from '../Components/InfoSection/info';
import Navbar from '../Components/Navbar/navbar';
import Services from '../Components/Services/services';
import Sidebar from '../Components/Sidebar/sidebar';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjThree}/>
            <Footer />

        </>
    )
}

export default Home;
