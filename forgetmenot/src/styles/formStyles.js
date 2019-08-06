import styled from "styled-components";

export const FormWrapper = styled.div`
  max-width: 500px;
  min-width: 400px;
  margin: 100px auto;
  font-size: 2.3rem;
  form {
    background-color: rgba(172, 172, 172, 0.3);
    border: solid 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.5);
    padding: 50px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const FormGroup = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  input {
    border: none;
    padding: 8px;
    width: 80%;
    outline: none;
  }
  input:focus {
    border-left: 3px solid #b87a71;
    -webkit-transition: 0.4s ease;
  }
  i {
    border: none;
    padding-right: 5%;
    color: #284243;
    margin-bottom: 5px;
  }
`;

export const Footer = styled.div`
  margin-top: 15px;
  margin-left: 10%;
  a {
    color: #284243;
    :hover {
      text-decoration: underline;
      color: #b87a71;
    }
  }
`;

export const FormLink = styled.div`
  padding: 10px 5%;
  width: 50%;
  margin-left: 10%;
  margin-top: 15px;
  background-color: #274759;
  border: none;
  border-radius: 5px;
  outline: none;
  text-align: center;
  a {
    color: white;
    font-size: 2rem;
  }
  :hover {
    background: #b21028;
  }
`;