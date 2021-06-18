import React,{useState} from 'react'
import Footer from '../Components/Footer/footer'
import InfoSection from '../Components/InfoSection/info'
import Navbar from '../Components/Navbar/navbar'
import RequestOrder from '../Components/Request/requestorder'
import Sidebar from '../Components/Sidebar/sidebar';

const Sell = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    return ( 
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <RequestOrder />
        {/* <InfoSection 
            lightBg= "true"
        /> */}
        <Footer />
        </>

    )
}

export default Sell;
