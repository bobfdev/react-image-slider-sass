import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { menuData } from './data/menu-data';
import './styles/Header.scss';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const showMenu = () => {
        setOpenMenu(!openMenu);
    }

  return (
    <div className="header">
        <nav className="nav-container">
            <div className="menu">
                <AiOutlineMenu className="menu-icon" onClick={showMenu} />
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

        <nav className={openMenu ? 'slider active' : 'slider'}>
            <ul onClick={showMenu} className='ul-items'>
                {menuData.map((item, index) => {
                    return (
                        <div className="container" key={index}>
                            <li className={item.className}>
                                <Link to={item.path}>
                                    {item.text}
                                </Link>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </nav>
    </div>
  )
}

export default Header