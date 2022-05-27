import React from 'react'
import paris from './images/paris.jpeg'
import barcelona from './images/barcelona.jpeg'
import moscow from './images/moscow.jpeg'
import newyork from './images/newyork.jpeg'
import './styles/GallerySection.scss'


const GallerySection = () => {
  return (
    <section className='gallery'>
        <h1>Gallery</h1>
        <div className="images">
            <div>
                <img src={paris} alt="paris" />
                <p>Paris, France</p>
            </div>
            <div>
                <img src={barcelona} alt="barcelona" />
                <p>Barcelona, Spain</p>
            </div>
            <div>
                <img src={moscow} alt="moscow" />
                <p>Moscow, Russia</p>
            </div>
            <div>
                <img src={newyork} alt="newyork" />
                <p>New York, NY</p>
            </div>
        </div>
    </section>
  )
}

export default GallerySection