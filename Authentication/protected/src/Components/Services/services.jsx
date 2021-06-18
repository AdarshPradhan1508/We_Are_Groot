import React from 'react'
import Icon1 from '../../Images/svg-1.png';
import {ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP} from './ServicesElements'
const Services = () => {
    return (
        <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>We help you to reduces fees and increase revenue</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Reuse </ServicesH2>
                <ServicesP>We help you to reduces fees and increase revenue</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Recycle</ServicesH2>
                <ServicesP>We help you to reduces fees and increase revenue</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
