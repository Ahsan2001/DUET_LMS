import React from 'react';
import {FooterProps} from "../../interface";


const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <footer className='mt-16 py-2'>
      <h1 className='text-center text-white'> {title}</h1>
    </footer>
  );
};

export default Footer;
