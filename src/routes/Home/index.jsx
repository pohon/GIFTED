import { useState } from 'react';
import List from '../../components/List';
import './styles.css';

const Home = () => {

  // states
  const [searchTerm, setSearchTerm] = useState('');

  // handlers
  const handleInputChange = e => {
    setSearchTerm(e.target.value);
  }

  return (
    <div id="home-page">
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <List searchTerm={searchTerm} endpoint="https://api.giphy.com/v1/gifs/search" />
    </div>
  );
};

export default Home;