import React from 'react'
import Header from './Header';
import Hero from './Hero';
import slideData from './data/slide-data';
import GallerySection from './GallerySection';
import Footer from './Footer';

function Home() {
  return (
    <div>
        <Header />
        <Hero slides={slideData} />
        <GallerySection />
        <Footer />
    </div>
  )
}

export default Home