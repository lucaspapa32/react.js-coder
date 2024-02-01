import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom'
import './Navbardrawer.css'

export default function Temporarydrawer() {
  const [state, setState] = React.useState({ // drawer options( for now i'll only use drawer at the right of the screen)
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => { // drawer materialUI
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width:  290, }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <nav className='drawer__nav'>
        <ul>
          <li>
            <Link to="/products"><h2 className='drawer__title'>Productos{<ArrowDropDownIcon fontSize="large"/>}</h2></Link>
            <ul className='drawer__submenu'>
              <li><Link to="category/ganadores-de-peso" >Ganadores de Peso</Link></li>
              <li><Link to="category/vitaminas-y-minerales">Vitaminas y minerales</Link></li>
              <li><Link to="category/carbohidratos">Carbohidratos</Link></li>
              <li><Link to="category/probioticos">Probioticos</Link></li>
              <li><Link to="category/proteinas-vegetales">Proteinas Vegetales</Link></li>
            </ul>
          </li>
          <li>
            <h2 className='drawer__title'>Que producto me sirve?{<ArrowDropDownIcon fontSize="large"/>}</h2>
            <ul className='drawer__submenu'>
                <li><Link to="type/masa-muscular">Masa muscular</Link></li>
                <li><Link to="type/nutricion-diaria">Nutricion diaria</Link></li>
                <li><Link to="type/recuperacion-muscular">Recuperacion muscular</Link></li>
                <li><Link to="type/perdida-de-grasa">Perdida de grasa</Link></li>
            </ul>
          </li>
            <li><Link to="/envios"><h2 className='drawer__title'>Envíos</h2></Link></li>
            <li><Link to="/ubicacion"><h2 className='drawer__title'>Ubicación</h2></Link></li>
            <li><Link to="/about"><h2 className='drawer__title'>Sobre nosotros</h2></Link></li>
        </ul>
      </nav>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon className='miau' fontSize='large' sx={{color: 'rgb(126, 128, 121)'}} /></Button>
          <Drawer
          
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

