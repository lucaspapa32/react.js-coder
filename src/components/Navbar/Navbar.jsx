import '../Header/Header.css';
import * as React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'
import Cartwidget from '../Cartwidget/Cartwidget'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// NAVBAR
function Navbar() {
    return (
        <div className="App-header__nav-container">
            <nav className="App-header__nav">
                <ul>
                    <li className="nav__sections">
                        <Link to="/products">
                            <h3 className="nav__titles">Productos{<ArrowDropDownIcon/>}</h3>
                        </Link>
                        <ul className="dropdown">
                            <li><Link to="category/ganadores-de-peso" >Ganadores de Peso</Link></li>
                            <li><Link to="category/vitaminas-y-minerales">Vitaminas y minerales</Link></li>
                            <li><Link to="category/carbohidratos">Carbohidratos</Link></li>
                            <li><Link to="category/probioticos">Probioticos</Link></li>
                            <li><Link to="category/proteinas-vegetales">Proteinas Vegetales</Link></li>
                        </ul>
                    </li>
                    <li className="nav__sections  pointer-none">
                        <h3 className="nav__titles pointer-none">Que producto me sirve?{ <ArrowDropDownIcon/>} </h3>
                        <ul className="dropdown">
                            <li><Link to="type/masa-muscular">Masa muscular</Link></li>
                            <li><Link to="type/nutricion-diaria">Nutricion diaria</Link></li>
                            <li><Link to="type/recuperacion-muscular">Recuperacion muscular</Link></li>
                            <li><Link to="type/perdida-de-grasa">Perdida de grasa</Link></li>
                        </ul>
                    </li>
                    <li className="nav__sections"><Link to="/envios"><h3 className="nav__titles">Envíos</h3></Link></li>
                    <li className="nav__sections"><Link to="/ubicacion"><h3 className="nav__titles">Ubicación</h3></Link></li>
                    <li className="nav__sections"><Link to="/about"><h3 className="nav__titles">Sobre nosotros</h3></Link></li>
                </ul>
            </nav>
            <Cartwidget/>
        </div>
    )
}

export default Navbar;