import React from 'react';

const Status = ({ status, onStatus, id }) => {
  let color;
  let text;
  switch (status) {
    case 'active':
      color = 'bg-green-200 border border-green-400 text-green-400';
      text = 'text-green-800';
      break;
    case 'contacted':
      color = 'bg-blue-200 border border-blue-400';
      text = 'text-blue-800';
      break;
    case 'visited':
      color = 'bg-pink-200 border border-pink-400';
      text = 'text-pink-800';
      break;
    case 'completed':
      color = 'bg-yellow-200 border border-yellow-400';
      text = 'text-yellow-800';
      break;
    default:
      color = 'bg-green-200 border border-green-400';
      text = 'text-green-800';
  }

  return (
    <div className="select-none cursor-pointer w-24" onClick={() => onStatus(id)}>
      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
        <span aria-hidden="true" className={`absolute inset-0 ${color} opacity-50 rounded-full`}></span>
        {/* <button onClick={() => console.log(id)}>{completed ? 'completed' : 'active'}</button> */}
        <span className={`relative ${text}`}>{status}</span>
      </span>
    </div>
  );
};

export default Status;
