import React from "react";
import styled from 'styled-components'

const StyledBody = styled.p`
    background-color: grey;
    opacity: 0.8;
    color: Black;
    font-family: "Roboto"
    border-radius: 15px;
    margin: 2rem;
`;

const Body = () => {
    return (
        <StyledBody>
             J'ai choisi l'option StyledComponents car elle me permet de styliser directement mon composant. 
        </StyledBody>
    )
}




export default Body