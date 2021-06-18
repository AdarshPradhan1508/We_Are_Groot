import React,{useState} from 'react'
import Navbar from '../Components/Navbar/navbar'
import Sidebar from '../Components/Sidebar/sidebar';
import Footer from '../Components/Footer/footer'
import ProfilePage from '../Components/Profile/ProfilePage';
const SignInPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <ProfilePage />

        <Footer />

        </>
    )
}

export default SignInPage;
