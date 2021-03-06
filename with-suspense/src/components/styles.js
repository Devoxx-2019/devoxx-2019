import styled from "styled-components";

// Layout
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RowNoWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  position: relative;
  list-style-type: none;
  background: white;
  color: #24a29a;
  padding: 16px;
  margin: 8px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.14);
  }
`;

// Icons
export const IconController = styled.img`
  width: 72px;
  margin-right: 8px;
`;

// Conponents
export const Menu = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  a {
    position: relative;
    display: block;
    height: 100%;
  }
`;

export const HomeTitleWrapper = styled.div`
  display: flex;
  position: relative;
  margin: 64px 0 32px 0;
`;

export const HomeTitle = styled.h1`
  font-size: 32px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

export const Placeholder = styled.div`
  min-width: 256px;
  height: 335px;
  margin: 0 32px 32px 0;
  border-radius: 16px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
  background-color: rgba(34, 34, 34, 0.4);
`;

export const GameItemTitle = styled.h1`
  font-size: 24px;
  color: #333;
`;

export const GameTitle = styled.h1`
  font-size: 32px;
  color: #333;
`;

export const GameItemCover = styled.img`
  width: 128px;
  border-radius: 8px;
  margin-right: 32px;
`;

export const GameDetails = styled.div`
  margin-top: 112px;
`;

export const GameHeader = styled.div`
  p {
    font-size: 18px;
    font-weight: normal;
    text-align: justify;
  }
`;

export const GameImage = styled.img`
  width: 216px;
  margin: 0 16px 16px 0;
  border-radius: 16px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
`;

export const GamePlatformWrapper = styled(Row)`
  justify-content: flex-start;
`;

export const GamePlatform = styled.div`
  display: inline-block;
  padding: 0.3em 0.6em;
  margin-right: 8px;
  color: white;
  border: 1px solid white;
  border-radius: 0.28em;
  background: rgba(34, 34, 34, 0.4);
  font-size: 18px;
  font-weight: bold;
  line-height: 1.14em;
  text-transform: uppercase;
`;

export const GameCharacters = styled(Row)`
  h2 {
    margin: 0 0 16px;
    width: 100%;
  }

  img:not(.loader) {
    width: 80px;
    border-radius: 8px;
    margin: 0 8px 8px;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
  }
`;

export const DevTools = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);

  input {
    margin-top: 16px;
    display: block;
  }
`;
