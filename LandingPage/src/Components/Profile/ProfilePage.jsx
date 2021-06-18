import React from 'react'
import {RequestContainer,RequestWrapper,RequestRow,RequestColumnWrapper,RequestColumn1,RequestColumn2,RequestTop,FinalHeading} from '../Request/RequestElements'
import {ImgLogo1} from '../Navbar/NavbarElements';
import Icon4 from '../../Images/avatar.png'
import {ButtonR} from '../ButtonRElements';
const ProfilePage = () => {
    return ( 
        <>
        <RequestContainer>
        <RequestTop><ImgLogo1 src={Icon4}/>Hey S!</RequestTop>
        
        <RequestWrapper> 
            <FinalHeading>Name: Sammy Thomas</FinalHeading>
            <FinalHeading>Mobile: 77854445</FinalHeading>
            <FinalHeading>City: ABC</FinalHeading>
            <FinalHeading>Coins: 500</FinalHeading>
            <FinalHeading>Lowest Footprint: Some Value</FinalHeading>
            <ButtonR
              to="/"
              label="Back"
              primary={false}
              
              >Go Home</ButtonR>
        </RequestWrapper>

        
        
        </RequestContainer>
        </>
    )
}

export default ProfilePage;