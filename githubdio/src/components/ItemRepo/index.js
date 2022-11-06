/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MdRemoveCircleOutline, MdOutlineVisibility } from 'react-icons/md';

import { ItemContainer } from './styles';

export function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer onClick={() => handleRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} rel="noreferrer" target="_blank">
        Ver repositório
        <MdOutlineVisibility size={16} />
      </a>
      <br />
      <button onClick={() => handleRemoveRepo(repo.id)} type="button">
        Remove
        <MdRemoveCircleOutline size={16} />
      </button>
      <hr />
    </ItemContainer>
  );
}
