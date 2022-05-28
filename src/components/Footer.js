import React from 'react'
import { Link } from 'react-router-dom'
import { 
    AiFillFacebook, 
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiFillYoutube,
    AiFillLinkedin,
    AiOutlineGithub,
} from 'react-icons/ai'
import './styles/Footer.scss'

const Footer = () => {
  return (
    <section className='footer'>
        <div className="cards">
            <ul>
                <li>
                    <Link to="#">About</Link>
                    <Link to="#">FAQ</Link>
                    <Link to="#">Support</Link>
                    <Link to="#">Careers</Link>
                    <Link to="#">Newsletter</Link>
                </li>
            </ul>

            <form>
                <label>Name</label>
                <input type="text" required />
                <label>Email</label>
                <input type="text" required />
                <label>Message</label>
                <textarea></textarea>
                <button>Send</button>
            </form>
        </div>

        <div className="socialmedia">
            <Link to='#'>
                <AiFillFacebook />
            </Link>
            <Link to='#'>
                <AiOutlineInstagram />
            </Link>
            <Link to='#'>
                <AiOutlineTwitter />
            </Link>
            <Link to='#'>
                <AiFillYoutube />
            </Link>
            <Link to='#'>
                <AiFillLinkedin />
            </Link>
            <Link to='#'>
                <AiOutlineGithub />
            </Link>
        </div>
    </section>
  )
}

export default Footer