import styled from 'styled-components';
import { Col_75, Col_25, Row } from '../LayoutComponents';
import { H3 } from '../SementicComponents';

import Image from 'next/image';

import cupAwardImg from '../imgs/cup-award.png';

export default function BestPartner() {

    return (
        <Wrapper>
            <Row>
                <Col_75>
                    <H3>Best Partner</H3>
                </Col_75>
                <Col_25>
                    <Symbol></Symbol>
                </Col_25>
            </Row>
            
            <Row>
                <Image 
                    width="100%"
                    src={cupAwardImg}
                    alt="A cup award"
                />
            </Row>

            <Row>
                We earn you the most revenue of operating your rental property.
            </Row>
        </Wrapper>
    )
}

const Wrapper = styled.div``;


const Symbol = styled.div`
    background-color: red;
    width: 50px;
    height: 50px;
`;