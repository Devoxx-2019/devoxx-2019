import React, { Component } from "react";
import { GameHeader } from "./GameHeader/";
import { GameCharacters } from "./GameCharacters/";
import * as S from "./styles";

export class GameDetails extends Component {
  render() {
    const { id, name } = this.props;
    return (
      <S.GameDetails>
        <GameHeader gameId={id} name={name} />
        <GameCharacters gameId={id} />
      </S.GameDetails>
    );
  }
}
