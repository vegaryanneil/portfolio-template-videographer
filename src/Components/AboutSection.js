import React from 'react';
import home1 from '../img/home1.png';
import { About, Description, Image, Hide } from '../styles';
import {motion} from 'framer-motion';
import { TitleAnim, fade, photoAnim } from '../Pages/Animation';
import Wave from './Wave';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={TitleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={TitleAnim}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={TitleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, exercitationem qui rem ullam est molestiae obcaecati ad repudiandae illo inventore.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
            <motion.img variants={photoAnim} src={home1} alt="guy with camera" />
            </Image>
            <Wave />
        </About>
    )
}

export default AboutSection;