import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getPins, togglePublished, countLikes } from '../services/pinboardService';
import { ReactComponent as Heart } from '../assets/svg/heartFilled.svg';
import PinboardAdmin from './common/pinboardAdmin';

const Pinboard = ({ user }) => {
  const { t } = useTranslation();

  const [img, setImg] = useState([]);
  const [pinboard, setPinboard] = useState([]);

  const fetchData = async () => {
    let { data } = await getPins();
    setImg(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePublished = async (id) => {
    await togglePublished(id);
    await fetchData();
  };

  const handleLike = async (id) => {
    await countLikes(id);
    await fetchData();
  };

  useEffect(() => {
    const isUser = img.filter((pin) => pin.published);
    console.log(user);

    if (user && user.isAdmin) setPinboard(img);
    else setPinboard(isUser);
  }, [img, user]);

  return (
    <main>
      <div className="px-4 sm:px-20 sm:py-4">
        <div className="bg-purple-100 rounded-lg my-6 px-4 shadow-md">
          <h1 className="text-4xl py-4 font-bold text-purple-600 text-shadow-sm break-words">{t('pinboard.h1')}</h1>
        </div>
        <div className="masonry-2-col">
          {img &&
            pinboard.map((pin) => {
              return (
                <div className="flex flex-col break-inside p-1 my-1 bg-gray-100" key={pin._id}>
                  <img className="rounded-xl" src={pin.data.secure_url} alt="" />
                  <div
                    className={
                      user && user.isAdmin ? 'mt-1 flex flex-row justify-around' : 'mt-1 flex flex-row justify-end'
                    }>
                    <div className="flex w-12 select-none">
                      <Heart
                        onClick={() => handleLike(pin._id)}
                        className="h-6 w-6 text-red-500 sm:block flex-shrink-0 -mt-1"
                      />
                      <span className="text-gray-800 text-sm ml-1">{pin.likes}</span>
                    </div>
                    {user && user.isAdmin ? <PinboardAdmin pin={pin} handlePublished={handlePublished} /> : null}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
};

export default Pinboard;
