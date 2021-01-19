import React, { useEffect } from 'react';

const Status = ({ completed, onStatus, id }) => {
  useEffect(() => {
    console.log('status component', completed);
  });
  return (
    <div className="select-none cursor-pointer" onClick={() => onStatus(id)}>
      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
        <span
          aria-hidden="true"
          className={`absolute inset-0 ${
            completed ? 'bg-yellow-200 border border-yellow-400' : 'bg-green-200 border border-green-400'
          }  opacity-50 rounded-full`}></span>
        {/* <button onClick={() => console.log(id)}>{completed ? 'completed' : 'active'}</button> */}
        <span className="relative">{completed ? 'completed' : 'active'}</span>
      </span>
    </div>
  );
};

export default Status;
