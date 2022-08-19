import Head from 'next/head'

import NavBar from '../Components/NavBar';
import Title from '../Components/Title';
import Testimonial from '../Components/Testimonial';
import BestPartner from '../Components/BestPartner';
import Gallery from '../Components/Gallery';
import Services from '../Components/Services';

import { Row, Col_25, Col_50, Col_75 } from '../LayoutComponents';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Design Collection</title>
      </Head>
      <Row>
        <Col_25>NayaHome</Col_25>
        <Col_50>
          <NavBar />
        </Col_50>
        <Col_25>
          LET&apos;S TALK
        </Col_25>
      </Row>
      <Row>
        <Col_75>
          <Title/>
        </Col_75>
        <Col_25>
          <Testimonial/>
        </Col_25>
      </Row>
      <Row>
        <Col_25>
          <BestPartner/>
        </Col_25>
        <Col_75>
          <Gallery/>
        </Col_75>
      </Row>
      <Row>
        <Services/>
      </Row>  
    </>
  )
}

