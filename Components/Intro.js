import Image from 'next/image';

import manTestimonialImg from '../imgs/man-testimonial.jpg';


export default function Intro() {

    return (
        <div className='flex flex-wrap md:flex-nowrap'>
            <div className='basis-full md:basis-3/4 flex flex-col justify-center md:m-0 mb-6'>
                <h1 className='md:text-left text-blue-600 font-bold xl:text-[9rem] md:text-8xl text-7xl text-center'>
                    Boost
                </h1>
                <h1 className='xl:leading-9 xl:text-[9rem] xl:mb-24 md:text-8xl md:mb-16 text-7xl md:leading-3 leading-3 mb-10 font-bold md:text-left text-center'>
                    your profits
                </h1>
                <h4 className='xl:text-5xl md:text-3xl text-2xl md:text-left text-center'>
                    from short-term and vacation rentals
                </h4>
            </div>

            <figure className='md:basis-1/4 basis-full'>
                <div className='md:w-4/5 w-2/5 m-auto'>
                    <Image
                        src={manTestimonialImg}
                        alt="A man smiling"
                        />
                </div>
                <h5 className="md:basis-1/4 basis-full md:w-4/5 w-2/5 md:text-left text-center m-auto text-xl font-semibold mb-2">This inn is so much more comfortable and lovely.</h5>
                <figcaption className="md:w-4/5 w-2/5 md:text-left text-center m-auto ">
                    <cite>
                        <span className='block'>JamesB</span>
                        <span className='block'>GM-Reddoorz</span>
                    </cite>
                </figcaption>                  
            </figure>
        </div>
    )
}