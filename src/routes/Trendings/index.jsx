import { useState } from 'react';
import List from '../../components/List';
import './styles.css';

const Trendings = () => {

  // states
  const [searchTerm, setSearchTerm] = useState('');

  // handlers
  const handleInputChange = e => {
    setSearchTerm(e.target.value);
  }

  return (
    <div id="trendings-page">
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <List searchTerm={searchTerm} endpoint="https://api.giphy.com/v1/gifs/trending"/>
    </div>
  );
};

export default Trendings;