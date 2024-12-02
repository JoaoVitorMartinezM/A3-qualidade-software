import styled from "styled-components";

export const CardEticketStyled = styled.div`
  width: 590px;
  height: 285px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      padding: 50px 25px;
      border: black 1px solid;
      border-radius: 15px;
      gap: 25px;
      background: linear-gradient(to top, var(--light-blue) 90%, var(--dark-blue) 10%);

  @media only screen and (max-width: 520px) {
    width: 90%;
    padding: 25px;
  };

`;