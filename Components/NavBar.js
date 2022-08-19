import styled from "styled-components"

export default function NavBar() {

    return (
        <UL>
            <Li>Property</Li>
            <Li>Services</Li>
            <Li>Testimonials</Li>
            <Li>About</Li>
        </UL>
    )
}

const UL = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    
    
    width: 100%;
    height: 100%;

    padding: 0;
    list-style: none;

    justify-content: center;
    align-content: center;
    align-items: center;
`

const Li = styled.li`
    flex-basis: 25%;
    
    text-align: center;
    
    border: 1px solid black; 

`