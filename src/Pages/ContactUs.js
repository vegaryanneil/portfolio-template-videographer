import React from 'react'
import { motion } from 'framer-motion'
import { pageAnimation, TitleAnim } from './Animation'
import styled from 'styled-components';
import ScrollTop from '../Components/ScrollTop';


const ContactUs = () => {
    return (
        <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{ background: "#fff"}}>
            <Title>
                <Hide>
                    <motion.h2 variants={TitleAnim}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                <Social variants={TitleAnim}>
                <Circle />
                <h2>Send Us A Message</h2>
                </Social>
                </Hide>
                <Hide>
                <Social variants={TitleAnim}>
                <Circle />
                <h2>Send Us A Message</h2>
                </Social>
                </Hide>
                <Hide>
                <Social variants={TitleAnim}>
                <Circle />
                <h2>Send Us A Message</h2>
                </Social>
                </Hide>
                <ScrollTop />
            </div>
        </ContactStyle>
    )
};

const ContactStyle = styled(motion.div)`
padding: 5rem 10rem;
color: #353535;
min-height: 90vh;
@media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
}
`;
const Title = styled.div`
margin-bottom: 4rem;
color: #312312;
@media (max-width: 1300px) {
    margin-top: 5rem;
}
`;
const Hide = styled.div`
overflow: hidden;
`;

const Circle = styled.div`
border-radius: 50%;
width: 3rem;
height: 3rem;
background-color: #123123;
`;

const Social = styled(motion.div)`
display: flex;
align-items: center;
h2 {
    margin: 2rem;
}
`;
export default ContactUs
