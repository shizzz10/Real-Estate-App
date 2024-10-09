import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <NotFoundPageDiv>
      <div>
        <h1>Page Not Found</h1>
        <Link to="/" className="homeBtn">
          Go Back to Home Page
        </Link>
      </div>
    </NotFoundPageDiv>
  );
};

export default NotFoundPage;

const NotFoundPageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  div {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .homeBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffb200;
    margin-top: 10px;
    border: 1px solid black;
    border-radius: 5px;
    text-decoration: none;
    padding: 5px;
  }
  .homeBtn:hover {
    background-color: #2e236c;
  }
`;
