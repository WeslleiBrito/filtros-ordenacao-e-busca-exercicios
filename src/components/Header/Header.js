import React from "react";
import { Container } from "./styles";

const Header = (props) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  const handleSearch = (e) => {
    props.setPesquisa(e.target.value);
  };

  const handleIdSearch = (e) => {
    props.setIdFilter(e.target.value);
  };

  const handleType = (e) => {
    props.setType(e.target.value)
  }

  const handleOrder = (e) => {
    props.setOrder(e.target.value)
  }

  return (
    <Container>
      <input
        type="number"
        placeholder="Buscar por id"
        onChange={handleIdSearch}
        value={props.idFilter}
      />
      <input
        type="text"
        placeholder="Buscar por nome"
        onChange={handleSearch}
        value={props.pesquisa}
      />
      <select onChange={handleOrder}>
        <option value="">Ordenar</option>
        <option value="crescent">Crescente</option>
        <option value="decrescent">Decrescente</option>
      </select>
      <select
        name="tipo"
        id="tipo"
        onChange={handleType}
        value={props.type}
      >
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
