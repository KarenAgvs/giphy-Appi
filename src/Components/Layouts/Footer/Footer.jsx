import './Footer.css'
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitch} from 'react-icons/fa';
import {IoLogoWhatsapp} from 'react-icons/io';
export const Footer =()=>{
    return(
        <>
        <hr className='line'></hr>
        <footer>
            <p>Karen Agudelo &copy; 2022 Ghiphy-api</p>
            <ul>
                <li><a href="">Linkedin</a></li>
                <li><a href="">Github</a></li>
                <li><a href=''>Instagram</a></li>
            </ul>
            <div className='socialmedia'>
            <FaFacebookF/>
            <IoLogoWhatsapp/>
            <FaTwitch/>
            </div>
        </footer>
        </>
    )
}