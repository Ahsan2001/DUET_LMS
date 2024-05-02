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
    <div className={`${styles.img_upload_custom} flex flex-col items-center`}>
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
        {image ? 'Change Photo' : 'Upload Photo'}
      </label>
      <button type="submit" onClick={imagePostHandler} className="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Save Changes</button>

    </div>
  );
};

export default ImageUpload;
