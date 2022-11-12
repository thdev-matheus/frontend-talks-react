import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.darkGreen};
`;

export const BoxLogo = styled.div`
  width: 50%;

  padding-left: 1rem;
  & > h1 {
    color: ${(props) => props.theme.white};
  }
`;

export const BoxIcons = styled.div`
  width: 50%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;

  padding-right: 1rem;

  color: ${(props) => props.theme.white};
`;
