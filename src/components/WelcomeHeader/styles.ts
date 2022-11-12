import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.darkGreen};

  @media (min-width: 767px) {
    height: 5rem;
  }
`;

export const BoxLogo = styled.div`
  width: 50%;

  padding-left: 1rem;
  & > h1 {
    color: ${(props) => props.theme.white};
  }

  @media (min-width: 767px) {
    padding-left: 2rem;

    & > h1 {
      font-size: 30pt;

      color: ${(props) => props.theme.white};
    }
  }
`;

export const BoxIconsMobile = styled.div`
  width: 50%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;

  padding-right: 1rem;

  color: ${(props) => props.theme.white};

  @media (min-width: 767px) {
    display: none;
  }
`;

export const BoxLinksTabDesk = styled.div`
  display: none;

  @media (min-width: 767px) {
    width: 50%;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;

    padding-right: 2rem;

    color: ${(props) => props.theme.white};

    & > span {
      font-size: 20pt;
      font-weight: bold;

      cursor: pointer;
    }
  }
`;
