import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { FaRupeeSign } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaBed } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
import { PiResizeThin } from "react-icons/pi";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { CounterContext } from './context/FavoritesContext';

  const Products = ({ image, title, location, bed, bathRoom, area, price}) => {
    const [isFavorite, setFavorite] = useState(false);

    const { updateCount } = useContext(CounterContext);

    const handleFavBtn = () => {
      setFavorite(prev => !prev)
      updateCount(isFavorite); 
    }

  return (
    <Product >
      <div className="items" >

        <img className="itemsImg" src={image} alt="" />
         <button className="overlayButton1">
         For Sale</button>
         <button className="overlayButton2">
         Feature</button>

         

         <div className="flexContainer">
         <h3>{title}</h3>
         <p><FaRupeeSign /> {price}</p>
         </div>
         <p><CiLocationOn /> {location}</p>

         <div className="flexContainer2">
            <p> <FaBed />  {bed} | <GiBathtub /> {bathRoom} | <PiResizeThin /> {area} |</p>
            <p onClick={handleFavBtn} className='favIcon'>
            {isFavorite ? <MdOutlineFavorite size="1rem" /> : <MdOutlineFavoriteBorder size="1rem" />} </p>
         </div>
         
        
    </div>
    
    </Product>
  )
}

export default Products;

const Product = styled.div`
  margin-top: 30px;

  p{
    font-size: 12px;
  }
 .items{
  position: relative;
  width: 250px;
  height: 200px;
  border: 1px solid #E0E0E0;
  padding: 7px 7px 80px 7px;
  border-radius: 15px;
 }
 .items img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
 }
 .overlayButton1{
    position: absolute;
    top: 15px;
    left:10%;
    padding: 8px 10px;
    background-color: #FFB200; 
    color: white; 
    border: none;
    border-radius: 15px;
    cursor: pointer;
    z-index: 1;
 }
 .overlayButton2{
    position: absolute;
    top: 15px;
    left:40%;
    padding: 8px 10px;
    background-color: #FFB200; 
    color: white; 
    border: none;
    border-radius: 15px;
    cursor: pointer;
    z-index: 1;
 }
 .flexContainer{
    display: flex;
    align-items: center;
 }
 .flexContainer h3{
   color: #001F3F;
   font-weight: 600;
 }

 .flexContainer p{
    margin-left: auto;
 }
 .flexContainer2{
  display: flex;
  align-items: center;
   margin-left: 4px;
 }
 .flexContainer2 .favIcon{
   margin-left: auto;
 }



`