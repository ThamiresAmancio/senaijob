import './menu.css';
import logo from '../../assets/LOGO-SENAI.png';
import { IconHome, IconPerfil, IconVagas } from '../icons/icons';
import { useState } from 'react';

export default function Menu(){
    const [isButton,setIsButton] = useState(false);

    function openNav(){
        setIsButton(true)
    }
    
    function closeNav () {
        setIsButton(false);
    };
    
    function OpenClose(){
        if(isButton === false){
            openNav()
        }else{
            closeNav()
        }
    }

    return(
        <>
            <header className="menu">
                <ul className='menu_hamburguer' onClick={OpenClose}>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                { isButton ?  
                <nav className='menu_display_none'>
                <img className='logo' src={logo} alt='Logo'/>
                <span className='titulo_logo'>JOB</span>
                <li>
                    <IconHome/>
                    Home
                </li>
                <li>
                    <IconPerfil/>
                    Perfil
                </li>
                <li>
                    <IconVagas/>
                    Minhas vagas
                </li>
                </nav> : null }
               
                <p>Sair</p>
            </header>
          
        </>
    )
}