import{j as e,L as r,p as o}from"./index-5OTuggZJ.js";const a=()=>e.jsxs(i,{children:[e.jsx(r,{to:"/",className:"homeBtn",children:e.jsx("h2",{children:" Home Page "})}),e.jsxs("div",{className:"contact",children:[e.jsx("h1",{children:"Contact Page"}),e.jsx("hr",{}),e.jsxs("form",{action:"",children:[e.jsxs("span",{children:[e.jsx("h5",{children:"Name"}),e.jsx("input",{type:"name",name:"name",placeholder:"Ali Ahmad",required:!0})]}),e.jsxs("span",{children:[e.jsx("h5",{children:"Email"}),e.jsx("input",{type:"email",name:"email",placeholder:"abc@gmail.com",required:!0})]}),e.jsxs("span",{children:[e.jsx("h5",{children:"Messege For Us!"}),e.jsx("textarea",{name:"text",rows:4})]}),e.jsx("button",{className:"submitBtn",onClick:()=>console.log("j"),children:"Submit"})]})]})]}),i=o.div`
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
`;export{a as default};
