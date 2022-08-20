import Head from "next/head";

import Image from 'next/image';

import Navbar from '../Components/Navbar.js';

import manTestimonialImg from '../imgs/man-testimonial.jpg';
import aCupAwardImg from '../imgs/cup-award.png';

import galleryPic1Img from '../imgs/gallery-pic-1.jpg';
import galleryPic2Img from '../imgs/gallery-pic-2.jpg';
import galleryPic3Img from '../imgs/gallery-pic-3.jpg';

export default function Home() {

  return (
    <>
      <Head>
        <title>Gallery Collection</title>
      </Head>
      <div className="container border-2 border-red-900 mx-auto">
        <header>
          <Navbar />
          
          <div>
            <div>
              <h1>Boost</h1>
              <h1>your profits</h1>
              <h4>from short-term and vacation rentals</h4>
            </div>
            
            <figure>
              <Image
                src={manTestimonialImg}
                alt="A man smiling"
                width="100%"
                />
                <h5>This inn is so much more comfortable and lovely.</h5>
                <figcaption>
                  <cite>
                    <span>JamesB</span>
                    <span>GM-Reddoorz</span>
                  </cite>
                </figcaption>                  
            </figure>
          </div>
        </header>
        <main>
          <div>
            
            <div>
              <h4>Best Partner</h4>
              <div className="symbol"></div>
            </div>
            
            <Image 
                src={aCupAwardImg}
                alt="A cup award"
                width="100%"
              />
            
            <p>We earn you the most revenue of operating your rental property.</p>
          </div>

          <div>
            <div>
              <Image
                src={galleryPic1Img}
                alt="A room picture"
                width="100%"
              />

              <Image
                src={galleryPic2Img}
                alt="A room picture"
                width="100%"
              />

              <Image
                src={galleryPic3Img}
                alt="A room picture"
                width="100%"
              />
            </div>
            <div>
              Pagination
            </div>
          </div>

          <ul>
            <li>airbnb</li>
            <li>Framer</li>
            <li>Booking.com</li>
            <li>afterpay</li>
            <li>treehouse</li>
          </ul>
        </main>
      </div>
      
    </>
    
  );
}