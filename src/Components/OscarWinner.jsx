import React from 'react';

export const OscarWinner = ({ Index, Year, Age, Name, Movie, Oscars }) => {
  return (
    <>
      <h1>
        {Index} {Name}
      </h1>
      <p>Movie: {Movie}</p>
      <p>Year: {Year}</p>
      <p>
        {' '}
        {Name} won <strong>{Oscars}</strong> Oscar(s)!
      </p>
    </>
  );
};
