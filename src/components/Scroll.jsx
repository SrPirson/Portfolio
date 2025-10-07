import React from 'react';

const Scroll = () => {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
      <img
        src="assets/img/arrow.gif"
        alt="Scroll arrow"
        className="w-12 h-12 invert brightness-200 rotate-90"
        />
    </div>
  );
};

export default Scroll;