import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 3.25rem;

  display: flex;
  justify-content: center;
  gap: 8px;

  position: absolute;
  z-index: 2;
  top: 10.75rem;

  input {
    width: 40rem;
    padding: 1rem;
    
    background: #262626;

    border: 1px solid #0D0D0D;
    border-radius: 8px;
  }

  button {
    width: 5.625rem;

    background: #1E6F9F;
    color: #F2F2F2;

    border-radius: 8px;
    border: none;

    font-size: 0.875rem;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    
    .plus {
      background: #1E6F9F;
    }
  }
`