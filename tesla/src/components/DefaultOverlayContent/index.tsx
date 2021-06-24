import React from 'react';
import { Container, Headding, Buttons } from './styles'

interface Props {
    title: string
    description: string
}

const DefaultOverlayContent: React.FC<Props> = ({ title, description }) => {
    return(
        <Container>
            <Headding>
                <h1>{title}</h1>
                <h2>{description}</h2>
            </Headding>
            <Buttons>
                <button>Custom Order</button>
                <button className="white">Existing Inventory</button>
            </Buttons>
        </Container>
    );
}

export default DefaultOverlayContent;