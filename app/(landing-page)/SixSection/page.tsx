'use client';
import Image from 'next/image';
import Slider from 'react-infinite-logo-slider';


const SixSection = () => {
    return (
        <div className='px-20 py-10'>
            <Slider
                width="250px"
                duration={40}
                pauseOnHover={true}
                blurBorders={false}
                blurBoderColor={'#fff'}
            >
                <Slider.Slide>
                    <Image src={'/image/image1/logo1.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/image/image1/logo2.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/image/image1/logo3.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/image/image1/logo4.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/image/image1/logo5.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/image/image1/logo6.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/image/image1/logo7.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/image/image1/logo8.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/image/image1/logo9.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/image/image1/logo10.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/image/image1/logo11.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/image/image1/logo12.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/image/image1/logo13.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/image/image1/logo14.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/image/image1/logo15.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/image/image1/logo16.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/image/image1/logo17.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/image/image1/logo18.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/image/image1/logo19.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>

            </Slider>
        </div>
    )
}

export default SixSection;
