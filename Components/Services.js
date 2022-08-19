import styled from "styled-components"

export default function Services() {

    return (
        <Ul>
            <Li>
                airbnb
            </Li>
            <Li>
                Framer
            </Li>
            <Li>
                Booking.com
            </Li>
            <Li>
                afterpay
            </Li>
            <Li>
                treehouse
            </Li>
        </Ul>
    )
}

const Ul = styled.ul`
    list-style: none;
    
    display: flex;
    flex-flow: row wrap;

    justify-content: center;
    align-content: center;
    align-items: center;

    width: 100%;

`
const Li = styled.li`
    flex-basis: 20%;
`
