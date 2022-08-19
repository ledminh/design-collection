import styled from 'styled-components';


export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const Col = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;
    align-content: center;


    border: 2px solid red;

`

export const Col_12_5 = styled(Col)`
    flex-basis: 12.5%;
`;

export const Col_20 = styled(Col)`
    flex-basis: 20%;
`;

export const Col_25 = styled(Col)`
    flex-basis: 25%;
`;

export const Col_33 = styled(Col)`
    flex-basis: 33.33333%;
`;

export const Col_50 = styled(Col)`
    flex-basis: 50%;
`;

export const Col_75 = styled(Col)`
    flex-basis: 75%;
`;

export const Col_80 = styled(Col)`
    flex-basis: 80%;
`