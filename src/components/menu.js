import React from 'react'
import Link from 'gatsby-link';

const Menu = () =>
    (
        <div style={{
            background: '#f4f4f4',
            paddingTop: '10px'
        }}>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/onas">O Nas</Link></li>
                <li><Link to="/kontakt">Kontakt</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><a href="https://allegro.pl/uzytkownik/ledbecoolPL?bmatch=baseline-cl-dict43-uni-1-2-1127">Allegro</a></li>



            </ul>


        </div>
    )


export default Menu;