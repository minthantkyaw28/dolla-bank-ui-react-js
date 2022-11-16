import React from 'react'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElement';
import Icon1 from '../../images/Icon1.png'
import Icon2 from '../../images/Icon2.png'
import Icon3 from '../../images/Icon3.png'

const Services = () => {
  return (
    <>
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>

                <ServicesCard>
                    <ServicesIcon src={Icon1}></ServicesIcon>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>
                        We help reduce your fees and increase your overall revenue.
                    </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}></ServicesIcon>
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>
                        Your can access out platform online anywhere in the world.
                    </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}></ServicesIcon>
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>
                       Unlock our special membership card that return 5% cash back.
                    </ServicesP>
                </ServicesCard>


            </ServicesWrapper>
        </ServicesContainer>
    </>
  )
}

export default Services
