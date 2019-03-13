import styled from "styled-components";

export const Title = styled.h1`
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconController = styled.img`
  width: 60px;
  margin-right: 8px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;

  & a {
    text-decoration: none;
  }
`;

export const Item = styled.li`
  list-style-type: none;
  background: white;
  color: #24a29a;
  padding: 16px;
  margin: 0 0 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #eee;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.14);
  }
`;

export const Center = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  align-items: center;
  justify-content: center;
`;

export const GameTitle = styled.h1`
  font-size: 24px;
  color: #333;
`;

export const GameCover = styled.img`
  width: 128px;
  border-radius: 8px;
  margin-right: 32px;
`;
