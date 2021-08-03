import React from 'react';
import './results.css';
import SearchResults from '../../Components/SearchResults';
import GridResults from '../../Components/GridResults';

function Results() {
  return (
    <div className="resultsContainer">
      <SearchResults />
      <GridResults />
    </div>
  );
}

export default Results;