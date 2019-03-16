import styled from "styled-components";

// Layout
export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CenterH = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

export const CenterV = styled.div`
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

// Icons
export const IconController = styled.img`
  width: 60px;
  margin-right: 8px;
`;

// Conponents
export const Title = styled.h1`
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const GameDetails = styled.div``;

export const GameHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 72px;

  img {
    width: 256px;
    margin: 0 32px 32px 0;
    border-radius: 16px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 18px;
    font-weight: normal;
    text-align: justify;
  }
`;

export const GamePlatformWrapper = styled(CenterH)`
  justify-content: flex-start;
`;

export const GamePlatform = styled.div`
  display: inline-block;
  padding: 0.25em 0.5em;
  margin-right: 8px;
  color: white;
  border: 1px solid white;
  border-radius: 0.28em;
  background: rgba(34, 34, 34, 0.4);
  font-size: 16px;
  font-weight: bold;
  line-height: 1.14em;
  text-transform: uppercase;
`;

export const GameCharacters = styled(CenterH)`
  justify-content: flex-start;

  h2 {
    margin: 0 0 16px;
    width: 100%;
  }
`;

export const GameCharactersWrapper = styled(CenterH)`
  justify-content: flex-start;

  img {
    width: 80px;
    border-radius: 8px;
    margin: 0 8px 8px;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
  }
`;

export const GameVideos = styled(GameCharacters)``;

export const GameVideosWrapper = styled(CenterH)`
  justify-content: flex-start;
`;