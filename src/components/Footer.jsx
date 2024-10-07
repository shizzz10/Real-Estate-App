import { GlobalStyles } from '../styles/Global';
import styled from 'styled-components';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';
const Footer = () => {
  return (
    <FooterDiv>
    <div className="mainFooter" id='footer'>

        <GlobalStyles />
        <div className="upperFooter pad">
        <div className="upperFooterLogo">
            <img src="mg.png" alt="make sense logo" />
        </div>
        <div className="upperFollowups">
            <h5>Follow Us</h5>
            <a href=""><FaFacebook color='darkblue'/></a>
            <a href=""><FaInstagram color='red'/></a>
        </div>
        </div>
        <hr />



        <div className="lowerFooter pad">
        <div className="contact lowercol">
            <h5>Contact Us</h5>
            <a href="makesensebanigala@gmail.com"><MdEmail /> makesensebanigala@gmail.com</a>
            <a href="+92 333 9956347"><FaPhoneSquareAlt /> +92 333 9956347</a>
        </div>
        <div className="about lowercol">
        <h5>About Us</h5>
        <HashLink smooth to="#home">Home</HashLink>
        <Link  to="/contact">Contact</Link>
        <a href="">FAQ's</a>
        <a href="">Pricing Plan</a>
        <a href="">Blog</a>
        </div>
        <div className="adress lowercol">
            <h5>Our Adress</h5>
            <p><CiLocationOn /> Banigala Bhara Kahu link Road, Imran Society </p>
        </div>
        </div>
        <hr />



        <div className="created">
           <footer>Copyright©2024</footer>
        </div>


    </div>
    </FooterDiv>
  )
}

export default Footer;

const FooterDiv = styled.div`
 background: linear-gradient(45deg, #FFB200, #5EA0E6, #2E236C);
margin-top: 60px;
 .upperFooter{
    display: flex;
 }
 .upperFollowups{
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 12px;
    margin-left: auto;
 }
 .upperFollowups h5{
    font-size: 15px;
    font-weight: 500;
 }
 .upperFollowups a{
    display: flex;
    align-items: center;
    text-decoration: none;
 }

 .upperFooterLogo img{
    height: 60px;
 }
 hr{
    margin: 0 25px;

 }
 



        .lowerFooter{
            margin: 20px 4px;
            display: flex;
            justify-content: center;
            gap: 50px;
            flex-wrap: wrap;
        }
        .lowercol{
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .lowercol a, p{
            display: block;
            width: 100%;
            text-decoration: none;
            color: black;
            font-size: 13px;
        }

                  .created{
                    padding: 40px;
                    display: flex;
                    justify-content: center;
                  }



    @media (max-width: 550px){
        .pad{
          padding: 5px 10px;
        }
        
           .upperFooterLogo img {
          height: 50px;
            }
           hr {
            margin: 5px 10px;
            }
        .lowerFooter{
            margin: 10px 4px;
            gap: 20px;
        }
        .lowercol {
           gap: 5px;
             }
          .lowercol h5{
            font-size: .9rem;
          }
          .lowercol p{
            font-size: .7rem;
          }
          .created {
            padding: 10px;
          }
          .footer{
            font-size: 1rem;
            color: black;
          }


    }
                  



`
