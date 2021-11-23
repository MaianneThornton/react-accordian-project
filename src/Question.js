import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  // state value for toggling - default set to hide info
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        {/* when clicked toggles showInfo state */}
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {/* ternary: if showInfo is true display - icon if showInfo is false display + icon */}
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* displaying the p depending on whether toggled on or off */}
      {showInfo && <p>{info}</p>}

    </article>
  );
};

export default Question;
