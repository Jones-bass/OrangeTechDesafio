import styled from 'styled-components';

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;

  }
  a{
    display: flex;
    background: #fff;
    color: #000;

    width: 100px;
    height: 13px;
    padding: 9px;
    border-radius: 8px;
    text-decoration: none;

    text-align: center;
    align-items: center;
    gap: 5px;

    font-weight: bold;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      background: #fafafa60;
      color: #fff;
    }
  }
  button {
    display: flex;
    color: red;
    background: #fff;
    padding: 6px 25px;
    border-radius: 8px;
    border: none;
    
    text-align: center;
    align-items: center;
    justify-content: space-between;
    gap: 5px;

    margin-bottom: 10px;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      background: #ff0000;
      color: #fff;
    }
    hr {
    color: #fafafa60;
    margin: 20px 0;
  }
}`;
