import React, { useState, useEffect } from 'react';
import { ReactComponent as Eye } from '../../assets/svg/eye.svg';
import { ReactComponent as EyeOff } from '../../assets/svg/eyeOff.svg';
import { ReactComponent as Trash } from '../../assets/svg/trash.svg';

const PinboardAdmin = ({ pin, handlePublished }) => {
  const [published, setPublished] = useState(pin.published);

  useEffect(() => {
    setPublished(pin.published);
  }, [pin.published]);

  return (
    <>
      <div className="flex w-12 select-none">
        {published ? (
          <Eye
            className="cursor-pointer h-6 w-6 text-green-400 sm:block flex-shrink-0 -mt-1"
            onClick={() => handlePublished(pin._id)}
          />
        ) : (
          <EyeOff
            className="cursor-pointer h-6 w-6 text-gray-400 sm:block flex-shrink-0 -mt-1"
            onClick={() => handlePublished(pin._id)}
          />
        )}
      </div>
      <div className="flex w-12 select-none">
        <Trash className="cursor-not-allowed h-6 w-6 text-gray-400 sm:block flex-shrink-0 -mt-1" />
      </div>
    </>
  );
};

export default PinboardAdmin;
