/* eslint-disable no-restricted-globals */
import { React, useState } from 'react';
import { postPin } from '../../services/pinboardService';

const FileUpload = () => {
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [data, setData] = useState('');

  const uploadImage = () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'pinboard');
    data.append('cloud_name', 'dgt2j8jc0');
    data.append('tags', 'pinboard');
    fetch('https://api.cloudinary.com/v1_1/dgt2j8jc0/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then(async (data) => {
        setUrl(data.url);
        setData(data);
        await postPin(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
    setImage('');
  };

  const setFile = (e) => {
    let image = e.target.files[0];
    setImage(image);
    console.log(image);
  };

  return (
    <div class="flex justify-center mt-8">
      <div class="w-96 rounded-lg shadow-xl bg-gray-50">
        <div class="m-4">
          <label class="inline-block mb-2 text-gray-500">File Upload</label>
          <div class="flex items-center justify-center w-full">
            <label class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
              <div class="flex flex-col items-center justify-center pt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">Upload a photo</p>
                {image && (
                  <p>
                    {image.name},{' '}
                    {image.size < 1000000 ? Math.round(image.size / 1024) : Math.round(image.size / 1000000)}{' '}
                    {Math.round(image.size / 1024) > 1024 ? 'MB' : 'KB'}
                  </p>
                )}
              </div>
              <input type="file" class="opacity-0" onChange={(e) => setFile(e)} />
            </label>
          </div>
        </div>

        <div class="flex justify-center p-2">
          <button class="w-full px-4 py-2 text-white bg-purple-700 rounded shadow-xl" onClick={uploadImage}>
            Upload now
          </button>
        </div>
        <div>
          <h1>Uploaded image will be displayed here</h1>
          <img src={url} alt={data.original_filename} />
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
