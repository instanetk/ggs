import React, { useState, useEffect } from 'react';
import ReactPinboard from 'react-pinboard';
import { useTranslation } from 'react-i18next';
import http from '../services/httpService';

const cols = [{ media: '', cols: 2 }];

const Pinboard = () => {
  const { t } = useTranslation();

  const [img, setImg] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    let data = await http.get('https://res.cloudinary.com/dgt2j8jc0/image/list/pinboard.json');
    setImg(data);
  };

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);

  const populatePins = () => {
    let imgs = img.data.resources;
    for (let i = 0; i < imgs.length; i++) {
      let rootUrl = 'https://res.cloudinary.com/dgt2j8jc0/image/upload/v1636162756/';
      return (
        <div>
          <img className="rounded-xl" src={rootUrl + imgs[i].public_id + imgs[i].format} alt="" />
        </div>
      );
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <main>
      <div className="px-4 sm:px-20 sm:py-4">
        <div className="bg-purple-100 rounded-lg my-6 px-4 shadow-md">
          <h1 className="text-4xl py-4 font-bold text-purple-600 text-shadow-sm break-words">{t('pinboard.h1')}</h1>
          {/* {img ?? populatePins()} */}
        </div>
      </div>
    </main>
  );
};

export default Pinboard;
