import React, { useState } from 'react';

function Filter({ onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [minRating, setMinRating] = useState(0);

  const handleFilter = () => {
    onFilter(searchTerm, minRating);
  };

  return (
    <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="number"
        placeholder="Min rating"
        value={minRating}
        onChange={(e) => setMinRating(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
}

export default Filter;
