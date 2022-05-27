import { useState } from 'react'
import { slideData } from './data/slide-data';
import './styles/Hero.scss';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';


const Hero = ({ slides }) => {
    const [first, setFirst] = useState(0);

    const length = slides.length

    const nextSlide = () => {
        setFirst(first === length - 1 ? 0 : first + 1)
    }

    const prevSlide = () => {
        setFirst(first === 0 ? length - 1 : first - 1)
    }

  return (
    <section>
        <div className="slide">
            <AiOutlineArrowLeft className='back' onClick={prevSlide} />
            <AiOutlineArrowRight className='forward' onClick={nextSlide} />
            {slideData.map((item, index) => {
                return (
                    <div className={item.className} key={index} >
                        <div className={index === first ? 'slides active' : 'slides'}>
                            {index === first && (
                                <div>
                                    <img src={item.image} alt="" />
                                    <p className='places'>{item.text}</p>
                                    <p className='status'>{item.status}</p>

                                    <div className='buttons'>
                                        <button>Join</button>
                                        <button>Discover</button>
                                    </div>

                                    <div className='bottom'>
                                        <p>50% off your first purchase!</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Hero