import React from 'react'
import Header from './Header';
import Section from './Section';
import Data from './Data';

function Home() {
  return (
    <div>
        <Header />
        <Section slides={Data} />
    </div>
  )
}

export default Home