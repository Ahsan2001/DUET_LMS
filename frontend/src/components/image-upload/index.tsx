import React, { useState } from 'react';
import { useSelector } from "react-redux";
import styles from "./styles.module.css";

const ImageUpload: React.FC = () => {
  const data = useSelector((state: any) => state?.user);
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
    </div>
  );
};

export default ImageUpload;
