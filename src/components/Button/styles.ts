import styled from "styled-components";

export const SButton = styled.button`
  width: 16rem;
  height: 3rem;

  padding: 0.5rem;

  border-radius: 0.5rem;

  font-size: 16pt;
  font-weight: bold;

  background-color: ${(props) => props.theme.darkGreen};
  color: ${(props) => props.theme.white};

  cursor: pointer;

  transition: 0.6s;
  :hover {
    box-shadow: -2px 5px 12px 0px #1e251e;

    transition: 0.6s;
  }
`;
