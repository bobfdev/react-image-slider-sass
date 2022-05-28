import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import './styles/Pricing.scss'

const Pricing = () => {
  return (
    <div className='pricing'>
        <div className="tohome">
            <Link to='/'>
                <AiOutlineArrowLeft className="arrow" />
            </Link>
            <h1 className="gp">General Pricing</h1>
        </div>

        <div className="card-container">
            <div className="tour">
                <h1>Paris</h1>
                <p>5 day tour to Paris</p>
                <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi exercitationem suscipit, iste reprehenderit quibusdam aspernatur a doloribus voluptate! Officiis, soluta?</h5>
                <button>Learn More</button>
            </div>
            <div className="tour">
                <h1>Barcelona</h1>
                <p>5 day tour to Barcelona</p>
                <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi exercitationem suscipit, iste reprehenderit quibusdam aspernatur a doloribus voluptate! Officiis, soluta?</h5>
                <button>Learn More</button>
            </div>
            <div className="tour">
                <h1>Moscow</h1>
                <p>5 day tour to Moscow</p>
                <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi exercitationem suscipit, iste reprehenderit quibusdam aspernatur a doloribus voluptate! Officiis, soluta?</h5>
                <button>Learn More</button>
            </div>
            <div className="tour">
                <h1>New York</h1>
                <p>5 day tour to New York</p>
                <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi exercitationem suscipit, iste reprehenderit quibusdam aspernatur a doloribus voluptate! Officiis, soluta?</h5>
                <button>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Pricing