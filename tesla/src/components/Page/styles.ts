import styled from "styled-components";
import imgMS from "../../assets/images/model-s.jpg"
import imgMY from "../../assets/images/model-y.jpg"
import imgM3 from "../../assets/images/model-3.jpg"
import imgMX from "../../assets/images/model-x.jpg"
import imgSP from "../../assets/images/solar-panels.jpg"
import imgSR from "../../assets/images/solar-roof.jpg"
import imgAC from "../../assets/images/accessories.jpg"

export const Container = styled.div`
    .colored:nth-child(1) {
        background-image: url(${imgMS});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }
    
    .colored:nth-child(2) {
        background-image: url(${imgMY});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }
    
    .colored:nth-child(3) {
        background-image: url(${imgM3});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }
    
    .colored:nth-child(4) {
        background-image: url(${imgMX});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }
    
    .colored:nth-child(5) {
        background-image: url(${imgSP});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }
    
    .colored:nth-child(6) {
        background-image: url(${imgSR});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }
    
    .colored:nth-child(7) {
        background-image: url(${imgAC});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }
    
`;

export const Spacer = styled.div`
    height: 15vh;
    background: #fff;
`;