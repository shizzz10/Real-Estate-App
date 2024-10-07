import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { GlobalStyles } from "../styles/Global";
import product from "./product";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import { useContext, useState } from "react";
import { CounterContext } from "./context/FavoritesContext";
import { MdOutlineFavorite } from "react-icons/md";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterProperty, setFilterProperty] = useState(product);

  const searchProperty = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);

    const filtered = product.filter((property) => {
      return property.title.toLowerCase().includes(value);
    });
    setFilterProperty(filtered);
  };
  const { count } = useContext(CounterContext);

  return (
    <>
      <Navbaar id="home">
        <div>
          <GlobalStyles />
          <div className="top pad">
            <div className="topLogo">
              <img className="logoImg" src="./mg.png" alt="" />
            </div>
            <div className="topText">
              <HashLink className="nav" >
              <MdOutlineFavorite className="navIcon" size="1rem" />
              <span >  ({count}) </span>
              </HashLink>
              <HashLink className="nav" smooth to="#products">
                Inventory
              </HashLink>
              <HashLink className="nav" smooth to="#footer">
                About
              </HashLink>
              <Link className="nav" to="/contact">Contact Us</Link>
            </div>
          </div>

          <div className="main pad">
            <div className="mainText">
              <h1 >Find your Dream Place</h1>
              <p>
                We are glad to have you around. Feel free to browse our website.
              </p>
              <div className="searchContainer">
                <input
                  type="text"
                  onChange={searchProperty}
                  value={searchValue}
                  placeholder="Find Properties"
                />
                <span className="searchIcon">
                  <CiSearch />
                </span>
              </div>
              {searchValue && (
                <div className="propertyList">
                  {filterProperty.length > 0 ? (
                    filterProperty.map((property) => (
                      <div key={property.id} className="propertyCard">
                        <img src={property.image} />
                        <h5>{property.title}</h5>
                      </div>
                    ))
                  ) : (
                    <p>No Properties Found</p>
                  )}
                </div>
              )}
            </div>

            <div className="mainImg">
              <img className="mainImage" src="./mainBg.png" alt="" />
            </div>
          </div>
        </div>
      </Navbaar>
    </>
  );
};

export default Navbar;

const Navbaar = styled.div`
  color: #2e236c;
  width: 100%;
  height: 85vh;
  background: linear-gradient(45deg, #ffb200, #5ea0e6, #2e236c);
  border-bottom-right-radius: 30%;

  .top {
    display: flex;
  }

  .logoImg {
    height: 60px;
  }

  .topText {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
    gap: 12px;
  }
  .topText .nav {
    display: flex;
    color: #ffb200;
    text-decoration: none;
  }
  .topText span {
    color: white;
    font-size: 10px;
    margin-bottom: auto;
  }

  .main {
    display: flex;
    margin-top: 10px;
  }
  .mainText p {
    font-size: 14px;
    width: 23rem;
    color: #001f3f;
  }
  h1 {
    font-weight: 700;
    width: 23rem;
    font-size: 3.5rem;
  }

  .mainImg {
    margin-left: auto;
    justify-content: flex-end;
  }
  .mainImage {
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

  .propertyCard {
    display: flex;
    width: 150px;
    border: 1px solid #2e236c;
    border-radius: 5px;
    height: 40px;
    gap: 5px;
    padding: 2px;
  }
  .propertyCard img {
    width: 50px;
    object-fit: cover;
    border-radius: 5px;
  }
  .propertyCard h5 {
    display: flex;
    align-items: center;
    font-weight: 600;
  }
  .propertyList {
    display: flex;
    gap: 6px;
    flex-direction: column;
  }

  @media (max-width: 800px) {
    h1 {
      font-weight: 600;
      width: 12rem;
      font-size: 2rem;
    }
    .mainText p {
      font-size: 14px;
      width: 12rem;
    }
    .searchContainer {
      width: 180px;
    }
    .mainImage {
      height: 16rem;
    }
  }

  @media (max-width: 550px) {
    height: 50vh;

    .logoImg {
      height: 40px;
    }

    .topText {
      gap: 6px;
    }
    .topText a {
      font-size: 0.7rem;
    }
    h1 {
      display: flex;
      font-weight: 600;
      width: 10rem;
      font-size: 1rem;
    }
    .mainText p {
      font-size: 0.6rem;
      flex-wrap: wrap;
      width: 8rem;
      color: black;
    }
    .searchIcon {
      position: absolute;
      right: 1%;
      padding: 0px;
      font-size: 0.8rem;
    }
    .searchContainer {
      width: 100px;
      margin-top: 10px;
      padding: 0px;
    }

    .searchContainer input {
      padding: 8px;
      border-radius: 25px;
      font-size: 0.7rem;
    }
    .pad {
      padding: 5px 10px;
    }
    .main {
      margin-top: 10px;
    }
    .mainImage {
      height: 11rem;
    }
  }
`;
