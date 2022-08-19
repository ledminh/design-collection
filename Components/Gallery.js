import styled from 'styled-components';

import {Row, Col_80, Col_20} from '../LayoutComponents';

import Image from 'next/image';
import galleryPic1Img from '../imgs/gallery-pic-1.jpg';
import galleryPic2Img from '../imgs/gallery-pic-2.jpg';
import galleryPic3Img from '../imgs/gallery-pic-3.jpg';

export default function Gallery() {

    return (
        <Row>
            <Col_80>
                <Image 
                    src={galleryPic1Img}
                    alt="Bedroom"
                    width="100%"
                />
                <Image 
                    src={galleryPic2Img}
                    alt="Living room"
                    width="100%"
                />
                <Image 
                    src={galleryPic3Img}
                    alt="Kitchen"
                    width="100%"
                />
            </Col_80>
            <Col_20>
                <Paginator/>
            </Col_20>
        </Row>
    )
}

const Wrapper = styled.div``;

const Paginator = styled.div`
    background-color: blue;
    width: 100%;
    height: 100%;
`