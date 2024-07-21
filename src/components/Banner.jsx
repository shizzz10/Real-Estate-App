import styled from 'styled-components';
import { BsHouseCheckFill } from "react-icons/bs";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";

const Banner = () => {
  return (
    <BannerDiv>
    <div className="banner">
    <h3>Why Chose Us</h3>

    <div className="flexBanner">

    <div className='futureHome'>
    <BsHouseCheckFill className='svg' color='#001F3F'  size="7em" />
      <h5>Find your Future Home</h5>
      <p>We help you find a new home by offering a
      smart real estate experience</p>
    </div>
    
    <div className='experienceAgents'>
    <MdOutlineRealEstateAgent color='#001F3F' className='svg'  size="7em"/>
      <h5>Experienced Agents</h5>
      <p>Find an experienced agent who knows your
      market best</p>
    </div>

    <div className='butRent'>
    <FaHouseUser color='#001F3F' className='svg'  size="7em" />
      <h5>Buy or rent homes</h5>
      <p>Millions of houses and apartments in your
      favourite cities</p>
    </div>

    </div>


    </div>
    </BannerDiv>
  )
}

export default Banner;

const BannerDiv = styled.div`
margin-top: 60px;
padding: 5px;
padding-bottom: 50px;
 background-color: #E0E0E0;
 color: #2E236C;
 display: flex;
 justify-content: center;

 h3{
  margin-top: 30px;
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: center;
 }

 .houseImg{
  height: 200px;
 }

 .flexBanner{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 80px;
  margin-top: 40px;
 }
 h5, p {
  width: 12rem;
 }
 h5{
  font-size: 15px;
  font-weight: 500;
  color: #001F3F;
 }
 p{
  font-size: 12px;
  color: black;
 }



 @media (max-width: 550px){
  h3{
    font-size: 1.4rem;
    margin-top: 10px;
    font-weight: 500;
  }
  .flexBanner {
        gap: 15px;
        margin-top: 20px;
        padding: 5px 10px;
    }
   .svg{
    height: 4em;
   }
   h5 {
    font-size: .9rem;
    font-weight: 400;
  }
  p {
    font-size: .7rem;
   }





 }




`
