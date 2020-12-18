import React from 'react';

const User = ({ user }) => {
  console.log(user);
  return (
    <div className="fixed right-6 bottom-6 sm:opacity-100 sm:left-6 sm:bottom-2">
      <div className="select-none">
        <div className="flex items-center text-xs text-white">{user}</div>
      </div>
    </div>
  );
};

export default React.memo(User);
