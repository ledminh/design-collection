import styled from 'styled-components';
import manTestimonialImg from '../imgs/man-testimonial.jpg';
import Image from 'next/image';

import {P} from '../SementicComponents';

export default function Testimonial() {

    return (
        <Figure>
            <Image
                src={manTestimonialImg}
                alt="A man smiling"
            />
            <Blockquote>This inn is so much more comfortable and lovely</Blockquote>
            <FigCaption>
                <Cite>
                    <P>James B</P>
                    <P>GM-Reddoorz</P>
                </Cite>
            </FigCaption>

        </Figure>
    )
}

const Figure = styled.figure``;

const Blockquote = styled.blockquote``;

const FigCaption = styled.figcaption``;

const Cite = styled.cite``;

