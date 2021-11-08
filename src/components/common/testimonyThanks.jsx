import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FileUpload from '../pinboard/fileUpload';
import Camera from '../../assets/images/camera.png';
import Party from '../../assets/images/party.png';

const TestimonyThanks = ({ onClose }) => {
  const { t } = useTranslation();

  const [visible, setVisible] = useState(false);

  return (
    <div className="fixed z-20 inset-0 overflow-y-auto">
      <div id="delete" className={`${visible ? '' : 'hidden'}`}>
        <FileUpload onCancel={onClose} />
      </div>
      <div className="flex min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-black opacity-25"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div
          className="inline-block align-bottom text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline">
          <div className="sm:flex sm:items-start">
            <div className="flex w-full max-w-lg space-x-3 bg-white h-72 rounded-lg p-4">
              <div className="mb-6 font-light text-center text-gray-600 dark:text-white w-full">
                <div className="flex justify-end text-gray-400">
                  <div className="w-6 h-6 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-col py-16 h-full justify-center align-middle items-center">
                  <span className="flex justify-center  align-middle text-1xl sm:text-2xl italic font-serif select-none">
                    {t('testimonyThanks.thankyou')} <img src={Party} alt="Party Icon" className="ml-2 h-7 w-7" />
                  </span>

                  <br />
                  <p>{t('testimonyThanks.tagline')} </p>
                  <div
                    className="flex justify-center bg-purple-500 py-4 my-4 rounded-md hover:bg-purple-700 align-middle"
                    onClick={() => setVisible(!visible)}>
                    <p className="text-sm text-white font-bold ">Upload a photo to our Pinboard!</p>

                    <img src={Camera} alt="Camera Icon" className="h-6 w-6 ml-1" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
              <div className="col-span-2 lg:col-span-1">
                <div className="relative "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonyThanks;
