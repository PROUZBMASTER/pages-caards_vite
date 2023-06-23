import React, { useState, useEffect } from 'react';

const Indelible = () => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedValue = localStorage.getItem('inputValue');
    if (storedValue) {
      setInputValue(storedValue);
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem('inputValue', inputValue);
  }, [inputValue]);

  return (
    <div className="container text-center mx-auto p-4 mt-5">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="w-100 border border-4 outline-transparent border-purple-600 p-3 rounded-75px"
      />
    </div>
  );
};

export default Indelible;
