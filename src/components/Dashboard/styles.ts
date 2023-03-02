import styled from "styled-components";

export const Container = styled.div`
  width: 46rem;
  height: 35rem;
  margin: 10rem auto 0;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    .tasks {
      font-size: 0.9rem;
      font-weight: 700;
      color: #4EA8DE;
    }

    .quantity {
      background: #333333;
      color: #D9D9D9;

      padding: 2px 10px;
      margin-left: 0.5rem;
      border-radius: 999px;
    }

    .completed {
      font-size: 0.9rem;
      font-weight: 700;
      color: #8284FA;
    }
  }

  main {
    border-top: 1px solid #333333;
    border-radius: 8px;
    overflow-y: auto;
    overflow-x: hidden;
    ::-webkit-scrollbar-track {
      background: #808080;
    }
    ::-webkit-scrollbar {
        width: 4px;
        background: #808080;
    }
    ::-webkit-scrollbar-thumb {
        background: #F2F2F2;
    }
    .no-task {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;

      margin-top: 4rem;

      width: 736px;
      
    }

    .with-task {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;

      width: 736px;
      
    }
    
    h3 {
      color: #808080;
    }

    p {
      font-weight: 400;
      font-size: 1rem;

      color: #808080;
    }
  }

`
