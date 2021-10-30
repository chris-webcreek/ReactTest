import React from 'react';
import { data } from '../data';
import { OscarWinner } from './OscarWinner';

export const FirstRequirement = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('Elizabeth Taylor');
  const [winnerFound, setWinnerFound] = React.useState({
    Index: 0,
    Year: 0,
    Age: 0,
    Name: '',
    Movie: '',
    Oscars: 0,
  });

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    const result = data.find((element) => element.Name === inputValue);

    if (result) {
      const oscarscount = data.filter(
        (actress) => actress.Name === result.Name
      ).length;
      setIsVisible(true);
      result.Oscars = oscarscount;
      setWinnerFound(result);
    } else {
      handleReset();
    }
  };

  const handleReset = () => {
    setInputValue('Elizabeth Taylor');
    setWinnerFound(undefined);
  };

  return (
    <>
      <h2>First Requiremenmt</h2>
      <input type="text"
        placeholder="Search the Oscar winner name"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>

      {isVisible && winnerFound != undefined && (
        <OscarWinner {...winnerFound} />
      )}
      {winnerFound === undefined && <p>Not found</p>}
    </>
  );
};
