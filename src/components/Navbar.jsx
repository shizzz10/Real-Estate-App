import styled from "styled-components"
import { CiSearch } from "react-icons/ci";
import { GlobalStyles } from "../styles/Global";

const Navbar = () => {
  return (
    <Navbaar id="home">
    <div>
    <GlobalStyles />
      <div className="top pad">
      <div className="topLogo">
        <img className="logoImg" src="./mg.png" alt="" />
      </div>
      <div className="topText">
        <a  href="#home">Home</a>
        <a href="#products">Inventory</a>
        <a href="#footer">About</a>
        <a href="#">Contact Us</a>
      </div>
       
      </div>

<div className="main pad" >
  <div className="mainText">
  <h1>Find your Dream Place</h1>
  <p>We are glad to have you around. Feel 
free to browse
our website.</p>
  <div className="searchContainer">
  <input type="text" placeholder="Find Properties"  />
  <span className="searchIcon"><CiSearch /></span>
  </div>
  
  </div>
  <div className="mainImg">
    <img className="mainImage" src="./mainBg.png" alt="" />
  </div>
</div>


      </div>
    </Navbaar>
  )
}

export default Navbar;


const Navbaar = styled.div`
color: #2E236C;;
 width: 100%;
 height: 85vh;
 background: linear-gradient(45deg, #FFB200, #5EA0E6, #2E236C);
 border-bottom-right-radius: 30%;

 .top{
  display: flex;
 }

 .logoImg{
  height: 60px;
 }

 .topText{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  gap: 12px;
 }
 .topText a{
  color: #FFB200;
  text-decoration: none;
 }

 .main{
  display: flex;
  margin-top: 10px;
 }
 .mainText p{
  font-size: 14px;
  width: 23rem;
  color: #001F3F;
 }
 h1{
  font-weight: 700;
  width: 23rem;
  font-size: 3.5rem;
 }

 .mainImg{
  margin-left: auto;
  justify-content: flex-end;
 }
 .mainImage{
  height: 21rem;
 }

 .searchContainer {

    display: flex;
    align-items: center;
    position: relative;
    width: 250px;
    margin-top: 20px;
    padding: 5px;
  }

  .searchContainer input {
    border: none;
    outline: none;
    width: 100%;
    object-fit: cover;
    flex: 1;
    padding: 10px;
    border-radius: 25px;
    font-size: 14px;
  }

  .searchIcon {
    position: absolute;
    right: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    color: #001f3f;
    font-size: 20px;
  }



  @media  (max-width: 800px) {
    
      h1{
  font-weight: 600;
  width: 12rem;
  font-size: 2rem;
 }
 .mainText p{
  font-size: 14px;
  width: 12rem;
 }
 .searchContainer {
width: 180px;
}
.mainImage{
  height: 16rem;
}
}

@media (max-width: 550px){
  
height: 50vh;

  .logoImg {
    height: 40px;
}

.topText {
    gap: 6px;
}
.topText a {
    font-size: .7rem;
}
  h1{
    display: flex;
  font-weight: 600;
  width: 10rem;
  font-size: 1rem;
 }
 .mainText p{
  font-size: .6rem;
  flex-wrap: wrap;
  width: 8rem;
  color: black;
 }
 .searchIcon {
    position: absolute;
    right: 1%;
    padding: 0px;
    font-size: .8rem;
  }
.searchContainer {
width: 100px;
margin-top: 10px;
padding: 0px;
}

.searchContainer input {
padding: 8px;
border-radius: 25px;
font-size: .7rem;
}
.pad{
  padding: 5px 10px;
}
 .main {
    margin-top: 10px;
}
.mainImage{
  height: 11rem;
}

}
  
  `