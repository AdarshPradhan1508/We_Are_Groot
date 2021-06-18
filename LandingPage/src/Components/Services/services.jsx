import React from 'react'
import Icon1 from '../../Images/svg-1.png';
import Icon2 from '../../Images/svg-3.png';
import Icon3 from '../../Images/svg-4.png';
import {ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP} from './ServicesElements'
const Services = () => {
    return (
        <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Sell Waste</ServicesH2>
                <ServicesP>Sell your waste so that we can recycle them</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Buy Recycled Products </ServicesH2>
                <ServicesP>Contribute to keeping environment clean by buying eco-friendly products</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Carbon Footprint</ServicesH2>
                <ServicesP>Calculate and maintain your Carbon Footprint and earn coins</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
