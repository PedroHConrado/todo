import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 3.25rem;

  position: absolute;
  z-index: 2;
  top: 10.75rem;

  form {
    display: flex;
    justify-content: center;
    gap: 8px;

    input {
      width: 40rem;
      padding: 1rem;

      background: #262626;
      color: #f2f2f2;
      
      border: 1px solid #0d0d0d;
      border-radius: 8px;
    }

    button {
      width: 5.625rem;

      background: #1e6f9f;
      color: #f2f2f2;

      border-radius: 8px;
      border: none;

      font-size: 0.875rem;
      font-weight: 700;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      cursor: pointer;

      .plus {
        background: #1e6f9f;
      }
    }
  }
`;
