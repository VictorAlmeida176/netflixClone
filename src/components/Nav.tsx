import './Nav.css'
import React, {useEffect, useState } from 'react';

interface navProps {

}


const Nav: React.FC<navProps> = () => {
    const [show,setShow] = useState<any>(false)


    useEffect(() => {
        window.addEventListener('scroll',()=>{
            setShow(window.scrollY>600)
        })
        return () => {
        }
    }, []);

    return (
        <div className={`nav-container ${show && "nav-container-black"}`}>
        <img className='nav-logo' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Netflix'></img>
                <img className='nav-avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU' alt='User'></img> 
            </div>
    );
};

export default Nav;