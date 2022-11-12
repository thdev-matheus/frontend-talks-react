import styled from "styled-components";

export const Container = styled.div`
  position: fixed;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: flex-end;

  background-color: ${(props) => props.theme.transparent};
`;

export const BoxOut = styled.div`
  width: 50%;
  height: 100vh;
`;

export const BoxMenu = styled.section`
  width: 50%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 2rem;

  padding: 2rem 2rem 0 0;

  border-radius: 0 0 0 10rem;

  background-color: ${(props) => props.theme.white};

  & > span {
    font-size: 16pt;
    font-weight: bold;

    color: ${(props) => props.theme.darkGreen};
  }
`;
