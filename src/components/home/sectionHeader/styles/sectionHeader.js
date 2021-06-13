import styled from "styled-components";
import bg from "../../../../assets/Dylan_1.jpeg";
import { textColor, textColor1 } from "../../../../colors/colors";

export const Section = styled.section``;

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${bg});
  background-size: contain;
  height: calc(100vh - 4.7rem);
  color: #ffff;
`;

export const Heading4 = styled.h4`
  padding: 5rem;
  padding-top: 0;
  text-align: center;
  font-size: 2.1rem;
`;

export const Heading1 = styled.h1`
  padding-bottom: 1rem;
  text-align: center;

  padding: 2.5rem;
  padding-top: 0;
  font-size: 2.6rem;
`;

export const Download = styled.a`
  width: 15rem;
  height: 5.4rem;
  background-color: transparent;
  text-align: center;
  border-radius: 5rem;
  text-decoration: none;
  border: 3px solid #ffff;
  padding-top: 1.4rem;
  color: #ffff;
  font-size: 1.6rem;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &: hover {
    background-color: #ffff;
    color: black;
  }
`;

export const Image = styled.img``;

export const Text = styled.p`
  font-size: 1.4rem;
  width: 35rem;
  text-align: center;
  padding: 3rem;
  margin-bottom: 1.4rem;
  line-height: 1.5;
`;
