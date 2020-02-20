import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const TextInput = styled.input`
  border: none;
  border-bottom: 1px solid #000000;
  width: 100%;
  height: 4.5em;
  line-height: 2em;
  padding: 8px;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  :focus {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
export const TextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid #000000;
  resize: none;
  height: 10em;
  width: 100%;
  line-height: 2em;
  padding: 8px;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  :focus {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
export const Submit = styled.button`
  border: none;
  padding: 8px;
  height: 2em;
  width: 100%;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
  background-color: #000000;
  color: #ffffff
  font-size: 15pt;
  font-weight: bold;
  :hover {
    background-color: rgba(0,0,0,0.5);
  }
  :focus {
    background-color: rgba(0,0,0,0.5);
  }
`;
export const Button = styled.button`
border: none;
padding: 8px;
height: 2em;
width: 150px;
transition-duration: 0.4s;
transition-timing-function: ease-in-out;
background-color: #000000;
color: #ffffff
font-size: 15pt;
font-weight: bold;
:hover {
  background-color: rgba(0,0,0,0.5);
}
:focus {
  background-color: rgba(0,0,0,0.5);
}
`;