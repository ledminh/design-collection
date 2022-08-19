import {H1, H3} from '../SementicComponents';

import styled from 'styled-components';

export default function Title() {

    return (
        <Wrapper>
            <FirstH1>Boost</FirstH1>
            <SecondH1>your profits</SecondH1>
            <H3>from short-term and vacation rentals</H3>
        </Wrapper>
    )
}

const Wrapper = styled.div`
`

const FirstH1 = styled(H1)`
    color: blue;
`

const SecondH1 = styled(H1)`
    color: black;
`