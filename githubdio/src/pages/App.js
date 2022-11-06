/* eslint-disable no-alert */
import { useState } from 'react';
import { Container } from './styles';
import gitLogo from '../assets/github.png';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { ItemRepo } from '../components/ItemRepo';
import { api } from '../services/api';

export function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);

      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo('');
        return;
      }
    }
    alert('Já existe este Repositorio!');
  };

  const handleRemoveRepo = (id) => {
    const onDelete = repos.filter((repo) => repo.id !== id);
    setRepos(onDelete);
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => <ItemRepo key={repo} handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  );
}
