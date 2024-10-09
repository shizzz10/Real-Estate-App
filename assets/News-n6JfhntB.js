import{j as e,p as t}from"./index-5OTuggZJ.js";import{b as s}from"./HomePage-DQxmHXaB.js";const n=()=>e.jsxs(a,{children:[e.jsxs("div",{className:"newsText",children:[e.jsx("h2",{children:"Recent Articles & News"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."})]}),e.jsxs("div",{className:"cart",children:[e.jsx("div",{className:"newsCart",children:e.jsxs("a",{href:"https://www.dawn.com/news/1809469",target:"blank",children:[e.jsx("img",{src:"tax1.jpg",loading:"lazy",alt:""}),e.jsxs("div",{className:"pad",children:[e.jsx("h5",{children:"Formalising real estate in Pakistan"}),e.jsxs("p",{children:["Read More ",e.jsx(s,{})]})]})]})}),e.jsx("div",{className:"newsCart",children:e.jsxs("a",{href:"https://www.dawn.com/news/amp/1845737",target:"blank",children:[e.jsx("img",{src:"tax2.jpg",loading:"lazy",alt:""}),e.jsxs("div",{className:"pad",children:[e.jsx("h5",{children:"Tax on property"}),e.jsxs("p",{children:["Read More ",e.jsx(s,{})]})]})]})})]})]}),a=t.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .cart {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
  }

  .newsCart {
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
  .newsCart img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }
  .newsCart a {
    text-decoration: none;
    color: black;
  }
  .pad {
    padding: 5px;
  }
  .pad h5 {
    font-weight: 500;
  }
  .pad p {
    font-size: 12px;
    color: #ffcc00;
  }

  @media (max-width: 550px) {
    .newsText h2 {
      font-size: 1.5rem;
    }
    .newsText p {
      font-size: 0.8rem;
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
      font-size: 0.8rem;
    }
    .pad p {
      font-size: 0.7rem;
    }
  }
`;export{n as default};
