import styled from "styled-components";

export const Container =styled.div`
  width: 46rem;
  height: 4.5rem;

  position: relative;

  display: flex;
  align-items: flex-start;

  padding: 1rem;

  background: #262626;
  border-radius: 8px;
  border: 1px solid #333333;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);

  span {
    width: 39.5rem;
    color: #F2F2F2;
    margin: 0 1.125rem 0 0.75rem;

    font-size: 0.875rem;
  }

  button {
    width: 24px;
    height: 24px;

    border-radius: 4px;
    border: none;
    background: transparent;

    cursor: pointer;


  }
`
