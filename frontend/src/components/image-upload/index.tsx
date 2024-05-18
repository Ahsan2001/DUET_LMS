import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { UpdateProfileApi } from '../../api';
import { Slide, toast } from 'react-toastify';
import { setUser, setUserImage } from '../../redux/slices/userSlice';

const ImageUpload: React.FC = () => {
  const data = useSelector((state: any) => state?.user);
  const dispatch = useDispatch();

  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };





  const imagePostHandler = async () => {

    const uploadData = {
      email : data?.email,
      profilePictureUrl:  image
    }

    const response: any = await UpdateProfileApi(uploadData);
    dispatch(setUserImage(response?.data));



    if (response.status === 200) {
      toast.success(response?.data?.message, {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    }
  }







  return (
    <div className={`${styles.img_upload_custom} flex flex-col items-center relative`}>
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
      {image ? (
        <img
          src={image}
          alt="Uploaded"
          className="mt-2 max-w-full h-auto rounded-md"
        />
      ) : (
        <img
          src={data?.picture}
          alt={data?.username}
          className="mt-2 max-w-full h-auto rounded-md"
        />
      )}
      <label htmlFor="imageInput" className="cursor-pointer mb-2"> 
       <div className='bg-gray-500 bg-opacity-75 p-2 rounded-full absolute top-32 right-16'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
        </svg>
        </div>
      </label>
      <button type="submit" onClick={imagePostHandler} className="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Save Changes</button>

    </div>
  );
};

export default ImageUpload;
