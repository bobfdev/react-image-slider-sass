import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import './styles/Header.scss'

const Header = () => {
  return (
    <div className="header">
        <nav className="nav-container">
            <div className="menu">
                <AiOutlineMenu className="menu-icon" />
            </div>

            <div className="logo">
                <h1>Traveloo</h1>
            </div>


            <div className="right">
                <ul>
                    <li>
                        <Link to='/places'>Places</Link>
                    </li>
                    <li>
                        <Link to='/pricing'>Pricing</Link>
                    </li>
                    <li>
                        <Link to='/sponsors'>Sponsors</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header