import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <ContactDiv>
      <Link to="/" className="homeBtn">
        <h2> Home Page </h2>
      </Link>

      <div className="contact">
        <h1>Contact Page</h1>
        <hr />

        <form action="">
          <span>
            <h5>Name</h5>
            <input type="name" name="name" placeholder="Ali Ahmad" required />
          </span>

          <span>
            <h5>Email</h5>
            <input
              type="email"
              name="email"
              placeholder="abc@gmail.com"
              required
            />
          </span>

          <span>
            <h5>Messege For Us!</h5>
            <textarea name="text" rows={4} />
          </span>

          <button className="submitBtn" onClick={() => console.log("j")}>
            Submit
          </button>
        </form>
      </div>
    </ContactDiv>
  );
};

export default Contact;

const ContactDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  color: #2e236c;

  .homeBtn {
    color: #ffb200;
    margin-right: auto;
    border: 1px solid black;
    border-radius: 5px;
    text-decoration: none;
    padding: 5px;
  }
  .homeBtn:hover {
    background-color: #2e236c;
  }

  .contact {
    display: flex;
    flex-direction: column;
    background-color: #ffb20060;
    padding: 2rem 20rem;
    gap: 4px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 20px;
  }
  h1 {
    color: #2e236c;
  }
  input,
  textarea {
    padding: 6px;
    border: hidden;
    border-radius: 5px;
  }
  span {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .submitBtn {
    padding: 3px;
    color: white;
    border: 1px solid white;
    border-radius: 5px;
    background-color: #2e236c;
  }
  .submitBtn:hover {
    background-color: black;
  }
  hr {
    width: 100%;
    margin-top: 10px;
    border: 1px solid white;
  }
  @media (max-width: 800px) {
    .contact {
      padding: 2rem 10rem;
    }
  }

  @media (max-width: 550px) {
    .contact {
      padding: 1rem 4rem;
    }
    .homeBtn {
      padding: 2px;
      font-size: 10px;
    }
    h1 {
      font-size: 24px;
    }
  }
`;
