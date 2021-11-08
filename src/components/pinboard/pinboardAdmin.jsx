import React, { useState, useEffect } from 'react';
import DeletePin from './delete';
import { ReactComponent as Eye } from '../../assets/svg/eye.svg';
import { ReactComponent as EyeOff } from '../../assets/svg/eyeOff.svg';
import { ReactComponent as Trash } from '../../assets/svg/trash.svg';

const PinboardAdmin = ({ pin, handlePublished }) => {
  const [published, setPublished] = useState(pin.published);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setPublished(pin.published);
  }, [pin.published]);

  const onCancel = () => {
    setVisible(!visible);
  };

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
        <Trash
          className="cursor-pointer h-6 w-6 text-gray-400 sm:block flex-shrink-0 -mt-1"
          onClick={() => setVisible(!visible)}
        />
        <div id="delete" className={`${visible ? '' : 'hidden'}`}>
          <DeletePin id={pin._id} onCancel={onCancel} />
        </div>
      </div>
    </>
  );
};

export default PinboardAdmin;
