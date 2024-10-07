import React from 'react'
import styled from 'styled-components';
import { FaArrowRight } from "react-icons/fa";

const News = () => {
  return (
    <NewsDiv>

      <div className="newsText">
        <h2>Recent Articles & News</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="cart">
      
      <div className="newsCart">
      <a href="https://www.dawn.com/news/1809469" target='blank'> 
      <img src="./tax1.jpg" alt="" />
      <div className="pad">
      <h5 >Formalising real estate in Pakistan</h5>
      <p>Read More <FaArrowRight /></p>
      </div>
      </a>
      </div>

      <div className="newsCart">
      <a href="https://www.dawn.com/news/amp/1845737"  target='blank'>
      <img src="./tax2.jpg" alt="" />
      <div className="pad">
      <h5 >Tax on property</h5>
      <p>Read More <FaArrowRight /></p>
      </div>
      </a>
      </div>
      
      </div>


    </NewsDiv>
  )
}

export default News;

const NewsDiv = styled.div`

  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  .cart{
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
  }

  .newsCart{
    margin-top: 30px;
  position: relative;
  width: 250px;
  height: 200px;
  border: 1px solid black;
  padding-bottom: 80px;
  border-radius: 15px;
  
  /* display: flex;
  gap: 20px; */
 }
 /* .newsCart a{

 } */
 .newsCart img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    
 }
 .newsCart a{
    text-decoration: none;
    color: black;
 }
 .pad{
    padding: 5px;
 }
 .pad h5{
    font-weight: 500;
 }
 .pad p{
    font-size: 12px;
    color: #FFCC00;
 }







 @media (max-width: 550px){
    
  .newsText h2{
    font-size: 1.5rem;
  }
  .newsText p{
    font-size: .8rem;
  }
  .cart {
    gap: 1rem;
    padding: 5px 10px;
  }
  .newsCart {
    margin-top: 20px;
    width: 190px;
    height: 160px;
    padding-bottom: 90px;
}
    .pad h5 {
    font-weight: 400;
    font-size: .8rem;
     }
     .pad p {
    font-size: .7rem;
     }


 }
`
