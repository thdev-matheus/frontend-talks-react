import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background-color: ${(props) => props.theme.primary};

  & > h2 {
    font-size: 18pt;
    color: ${(props) => props.theme.secondary};
  }

  & > h3 {
    font-size: 16pt;
    color: ${(props) => props.theme.secondary};
  }

  & > div {
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    transition: 0.6s;

    & > button:first-of-type {
      background-color: ${(props) => props.theme.lightGreen};
    }
  }

  @media (min-width: 767px) {
    & > h2 {
      font-size: 30pt;

      margin-top: 1rem;
    }

    & > img {
      width: 25rem;
    }

    & > h3 {
      font-size: 25pt;
    }

    & > div {
      flex-direction: row;
      justify-content: center;
      gap: 2rem;

      transition: 0.6s;

      & > button {
        height: 4rem;

        margin-top: 1rem;

        font-size: 20pt;
      }
    }
  }

  @media (min-width: 1000px) {
    & > h2 {
      font-size: 25pt;
    }

    & > img {
      width: 15rem;
    }

    & > h3 {
      font-size: 25pt;
    }

    & > div {
      flex-direction: row;
      justify-content: center;
      gap: 2rem;

      transition: 0.6s;

      & > button {
        height: 4rem;

        margin-top: 1rem;

        font-size: 20pt;
      }
    }
  }
`;
