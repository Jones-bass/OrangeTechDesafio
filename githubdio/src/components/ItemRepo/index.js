import React from 'react';

import { ItemContainer } from './styles';

function ItemRepo() {
  return (
    <ItemContainer>
      <h3>Jones Bass</h3>
      <p>Jones Bass</p>
      <a href="/" rel="noreferrer" target="_blank">Ver repositório</a>
      <br />
      <a href="/" rel="noreferrer" className="remover">Remover</a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
