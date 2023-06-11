import React from "react";
import styled from 'styled-components'


const StyledDiv = styled.div`
    background-color: lightBlue;
    border-radius: 15px;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem;
`;

const StyledButtons = styled.button`
    border-radius: 1rem;
    margin: 16px;
    width: 7rem;
    height: fit-content;
    height-min: 2rem;
    background-color: lightGray;

`;

const StyledTitle = styled.h1`
    font-family: "Roboto";
    font-syze: 2.5rem;
    color: #48006d;
`

const Header = () => {
    return (
        <StyledDiv>
            <div>
                <StyledButtons>Et non!</StyledButtons>
                <StyledButtons>Y a rien!</StyledButtons>
                <StyledButtons>Ici non plus!</StyledButtons>
                <StyledButtons>Pas mieux!</StyledButtons>
            </div>
            <StyledTitle>Voici mon essai CSS avec StyledComponents </StyledTitle>
        </StyledDiv>
    )
}




export default Header