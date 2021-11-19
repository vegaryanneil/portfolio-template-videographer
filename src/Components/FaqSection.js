import React from 'react';
import styled from 'styled-components';
import {About} from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import {scrollReveal} from "../Pages/Animation"

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <Faq variants={scrollReveal} ref={element} animate={controls} intial="hidden">
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title="How Do I start">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, molestias.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                 </div>
            </Toggle>
            <Toggle title="Daily Schedule">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, molestias.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </Toggle>
            <Toggle title="Question 3">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, molestias.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </Toggle>
            <Toggle title="Question 4">
                 <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, molestias.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </Toggle>
            </AnimateSharedLayout> 
        </Faq>
    )
}

const Faq = styled(About)`
display: block;
span{
    display: block;
}
h2 {
    padding-bottom: 2rem;
    font-weight: lighter
}
.faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
}
.question{
padding: 3rem 0;
cursor: pointer;
}
.answer{
    padding: 2rem 0;
    p{
        padding: 1rem 0;
    }
}
`
export default FaqSection
